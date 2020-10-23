export function createControl(config, validation){
  return{
      ...config,
      validation,
      valid: !validation,
      touched: false,
      value: ''
  }
}

export function validate(value, validation = null){
  if(!validation){
      return true
  }
  let isValide = true

  if(validation.required){
      isValide = value.trim() !== "" && isValide
  }
  return isValide
}


export function validateForm(formControls){
  let isFormVlid = true;

  for(let control in formControls){
      if(formControls.hasOwnProperty(control)){
          isFormVlid = formControls[control].valid && isFormVlid
      }
  }

  return isFormVlid
}

