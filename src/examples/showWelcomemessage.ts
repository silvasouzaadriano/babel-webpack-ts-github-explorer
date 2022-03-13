type User = {
  name: string,
  email: string,
  address: {
    city: string,
    uf?: string
  }
}

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}.
    Your city iis ${user.address.city} and your state is ${user.address.uf}`
}

const user = {
  name: "Adriano",
  email: "silva.souza.adriano@gmai.com",
  address: {
    city: 'Florianópolis',
    state: 'SC'
  }
}

const message = showWelcomeMessage(user);