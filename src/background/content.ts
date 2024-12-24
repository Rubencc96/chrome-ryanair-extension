const passengers = [
  {
    tratamiento: 'Sr',
    nombre: 'Alberto',
    primer_apellido: 'Pepito',
    segundo_apellido: 'Gonzalez',
    segundo_apellido_bool: true,
    asistencia_especial: false
  },
  {
    tratamiento: 'Sra',
    nombre: 'Ana',
    primer_apellido: 'López',
    segundo_apellido: '',
    segundo_apellido_bool: false,
    asistencia_especial: true
  }
];


// Función para rellenar el formulario de un pasajero
const fillPassengerForm = (passenger: any, passengerIndex: number) => {
  const baseRef = `ADT-${passengerIndex}`; // Identificador del pasajero
  
  // Tratamiento
  const treatmentDropdown = document.querySelector(`[data-ref="pax-details__title"][data-ref*="${baseRef}"] .dropdown__toggle-text`);
  if (treatmentDropdown) {
    (treatmentDropdown as HTMLElement).innerText = passenger.tratamiento;
  }

  // Nombre
  const nameInput = document.querySelector(`[data-ref="pax-details__name"][data-ref*="${baseRef}"] input`) as HTMLInputElement;
  if (nameInput) {
    nameInput.value = passenger.nombre;
  }

  // Primer apellido
  const firstSurnameInput = document.querySelector(`[data-ref="pax-details__first_surname"][data-ref*="${baseRef}"] input`) as HTMLInputElement;
  if (firstSurnameInput) {
    firstSurnameInput.value = passenger.primer_apellido;
  }

  // Segundo apellido
  const secondSurnameInput = document.querySelector(`[data-ref="pax-details__second_surname"][data-ref*="${baseRef}"] input`) as HTMLInputElement;
  if (secondSurnameInput) {
    secondSurnameInput.value = passenger.segundo_apellido;
  }

  // Checkbox "No tengo segundo apellido"
  const noSecondSurnameCheckbox = document.querySelector(`[data-ref="pax-details__second_surname_check"][data-ref*="${baseRef}"] input`) as HTMLInputElement;
  if (noSecondSurnameCheckbox) {
    noSecondSurnameCheckbox.checked = !passenger.segundo_apellido_bool;
  }

  // Toggle de asistencia especial
  const specialAssistanceToggle = document.querySelector(`[data-ref^="sa-activate-toggle-${baseRef}"] input`) as HTMLInputElement;
  if (specialAssistanceToggle) {
    specialAssistanceToggle.checked = passenger.asistencia_especial;
  }
};

// Función para rellenar los formularios de todos los pasajeros
const fillAllForms = (passengers: any[]) => {
  passengers.forEach((passenger, index) => {
    fillPassengerForm(passenger, index);
  });
};

// Ejecutar la función para rellenar todos los formularios
fillAllForms(passengers);
