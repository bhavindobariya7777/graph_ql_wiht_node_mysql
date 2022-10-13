#query{
  # getUserList{
  # id,
  #   name,
  #   email,
  #   status
  # }
#}

query{
  getSpecificUser(id:1){
      id,
      name,
      email
	}
}

# mutation{
#   createUser(name:"Ram",email:"Ram@gmail.com",gender:"Male",status:0){
#     name,
#     email
#   }
# }

# mutation{
#   updateUser(id:10,name:"Arav",email:"arav@tecoreng.com",gender:"Male",status:1){
# 		id,
#     name
# 	}
# }

# mutation{
#   updateUserTricky(id:10,name:"Arav1",email:"arav1@tecoreng.com",gender:"Male",status:1){
# 		status,
#     message,
#     error
# 	}
# }

# mutation{
#   deleteUser(id:10){
# 		status,
#     message,
#     error
# 	}
# }


