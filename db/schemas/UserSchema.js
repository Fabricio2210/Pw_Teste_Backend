const mongoose = require("mongoose");
const phoneNumber = require( 'awesome-phonenumber' );
const validateEmail = (email) => {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validateTelefone = (telefone) =>{
  let regCode = phoneNumber(telefone).getRegionCode( )
  let tel = new phoneNumber(telefone,regCode)
  return tel.canBeInternationallyDialled( ) === true
}

const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    index: true,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  sobrenome: {
    type: String,
    index: true,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Email inválido"],
  },
  senha: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
    validate: [validateTelefone, "Telefone formato inválido"],
  },
  avatarUrl: {
    type: String,
    default:'https://via.placeholder.com/80x80.png'
  },
});

UserSchema.index();
module.exports = mongoose.model("UserSchema", UserSchema);
