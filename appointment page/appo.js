const specializationSelect = document.querySelector('#specialization');
const doctorSelect = document.querySelector('#doctor');

const doctorsBySpecialization = {
  cardiology: ['Arun', 'Vijay'],
  gastroentrology: ['Sunita', 'Devi'],
  pediatrics: ['Praveen', 'William']
};

specializationSelect.addEventListener('change', () => {
  const specialization = specializationSelect.value;
  const doctors = doctorsBySpecialization[specialization];

  // Clear existing options
  doctorSelect.innerHTML = '';

  // Add new options
  doctors.forEach(doctor => {
    const option = document.createElement('option');
    option.value = doctor;
    option.textContent = doctor;
    doctorSelect.appendChild(option);
  });
});