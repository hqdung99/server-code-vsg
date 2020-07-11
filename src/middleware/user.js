const express = require('express');
const User = require('../database/models/user');

const saveUsers = async (req, res, next) => {
  const user1 = new User({
    firstName: 'Dung1',
    lastName: 'Huynh1',
  });
  user1.save();

  return next();
};

module.exports.saveUsers = saveUsers;
