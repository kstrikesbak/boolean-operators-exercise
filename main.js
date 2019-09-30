function moreThan5(num) {
  return num>5;
}

function topScore(score,top) {
  return score>top;
}

function isInDanger(grade) {
  return grade>= 60 && grade <=71;
}

function isCoasting(grade) {
  return grade>71 && grade<=83;
}

function isSucceeding(grade) {
  return grade>= 84 && grade <=92;
}

function isFailing(grade) {
  return grade<60;
}

function isAcing(grade) {
  return grade>92;
}

function isStudent(role) {
  return role === 'student';
}

function isTeacher(role) {
  return role === 'teacher';
}

function isAdmin(role) {
  return role === 'admin';
}

function isElementary(level) {
  return level === 'elementary';
}

function notAnElementarySchoolAdministrator(role,level) {
  return 
}

function isMiddleSchoolTeacher(role, level) {
  return role === 'teacher' && level>=6 && level<=8;
}

function differentPeople(name1,name2) {
  return name1 !== name2;
}

module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}