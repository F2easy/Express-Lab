const students = [
  { fullname: 'Jason Smith', enrolled: true, class: 'Freshman'},
  { fullname: 'Will James', enrolled: false, class: 'Junior'},
  { fullname: 'Anthony Brown', enrolled: true, class: 'Senior'},
  { fullname: 'Andrew Wills', enrolled: true, class: 'Senior'},
  { fullname: 'Luis Vasquez', enrolled: false, class: 'Sophmore'},
  { fullname:'Colton Caldwell', enrolled: true, class: 'Freshman'},
  
];

module.exports = {
  getAll: function(){
    return students;
  }
};