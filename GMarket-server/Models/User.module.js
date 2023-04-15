const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name :{ type: String, require: true },
    last_name :{ type: String, require: true },
    type: { type: String, require: true, enum: ["user", "admin"] },
    email: { type: String, require: true },
    phone_number:{ type: Number, require: true ,unique:true},
    rating: [{ type: Number, require: true },],
    profile_picture: {
        type: String,
        default: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAM1BMVEXk5ueutLfIzc/n6eqrsbS3vL+zubza3d7g4uO6v8K9wsTX2tvR1Nbq7OyorrLN0NLDx8ou11yyAAACuElEQVRoge2a247jIAxAAXMnF/7/aydJp021TYnd2pFmxXmblznCGEzsKtXpdDqdTqfT6XT+PACg4oIa4WKxCnP2esPVIcJlfojGa6vvWKvToC6xg6p2F/8y+eEC+TjrF/Nmd1Hc7g7Nm92MkmKIr+HesVlSHRrmVZ7k3KFpFpXHM/UirzIJB+/T7Ek+S8ihItRLtgcB90mePfD8J230OLVE1MuEdGvNrQaHVrMvPOCXrT2vGipezZ7q2Ezbgs57wVBCzhx0MMjD/Qtn0CGR1LYwuhX+hG1uw7jhkZJqC5nTTVPrxOjG1pE7vrsvd7v/JNeIZ4z1QidU783NWcEh09ycdyoMtGSLjG4VSW7ONFe0YsL8YCMVcMsaclrQOavYCiHTJ9aXw0pEv9iYM02tC0dGXeRjEKe2WaDrgr1f+M0K+QFui1CnK53KZdoOG2eldOJ8HL/Imyuf5FatTk6aFe6pwpt26mL2QbqhCuEw46w2V7Sxofh/u6rWVvku8o0xVD3d/dZOfr6mdX8DxjjUnBaqKUq0d31of3DdsAQghjLMJufknEspVzOXEJXwvGb572HOzi97bJ9nNetfLpkSpbYdIJjkp/d3i520q0Wx+2FJ7ZZ399tcWKM/xlkjxA9/DVyZDyW3JjRHdusGjsWvdyjx63vT+69HhRCpa97t7rsnDJh3VQtlz58vHcI35lX+cUUHQ2rgHtvTJ/UNGpNPilzTd/3reO926iMOCpNZkzu7nGriyxkIAylm+dmomQ5+z6ldRIwcedBR814yqB4MdS6DBNWNYN/sG5gtB+JoBM10riZ2Lwmct76kln3e8hNc9nlXnTYAJNJeuFCS32inutDZvtM848TZBJlW0AVu8measwzWsn3gbtVSwRO20bheoE5WlNZvfgYjTGO/166CKC13p9Pp/Hl+AA3gIVNYzV3JAAAAAElFTkSuQmCC`,
      },
    
})

const User = mongoose.model("User",userSchema);

module.exports = User;