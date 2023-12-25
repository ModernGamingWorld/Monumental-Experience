ServerEvents.recipes(e => {

  removeRecipeByID(e, [
      `psi:assembler`,
      `psi:programmer`,
      `psi:cad_assembly_iron`,
      `psi:psidust`,
      `psi:psimetal`,
      `psi:psigem`
  ])
})
