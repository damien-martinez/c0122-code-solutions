
function graduate(credential) {

  return function (fullName) {
    return console.log(`${fullName} ${credential}`);
  };
}

const medicalSchool = graduate('M.D.');

const lawSchool = graduate('Esq.');

medicalSchool('Dan Abramov');
lawSchool('Ryan Florence');
