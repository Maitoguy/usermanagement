const User = require('../models/user');


module.exports.addUser = function(req , res){
    console.log(req.body);
    let {name , password , email , role , position} = req.body;

    const user = {
        name: name,
        password: password,
        email: email,
        role: role,
        position: position
    }

    User.create(user)
    .then(user => {
        console.log('Data Added:' , user);
    })
    .catch(err => {
        console.log('Error in adding:' ,  error)
    })

    res.send('User Added Successfully')
}

module.exports.sendUser = function(req , res){
    User.find()
    .then(users => {
        
        res.json(users);
    })
    .catch(err => {
        console.log('Error in fetching users:', err);
        res.status(500).send('Internal Server Error');
    });

}

module.exports.deleteUser = async function (req, res) {
    const userId = req.params.id;
  
    try {
      const deletedUser = await User.findOneAndDelete({ _id: userId });
  
      if (deletedUser) {
        console.log(`User deleted: ${deletedUser}`);
        res.json({ message: 'User deleted successfully', deletedUser });
      } else {
        console.log(`User with ID ${userId} not found`);
        res.status(404).json({ message: `User with ID ${userId} not found` });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports.updateUser = async function(req, res) {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (updatedUser) {
      console.log('User updated:', updatedUser);
      res.json(updatedUser);
    } else {
      console.log(`User with ID ${userId} not found`);
      res.status(404).json({ message: `User with ID ${userId} not found` });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
