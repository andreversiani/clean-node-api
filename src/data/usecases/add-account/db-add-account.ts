import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-dd-acount-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const encryptedPassword = await this.encrypter.encrypt(account.password)

    const newAccount = {
      name: account.name,
      email: account.email,
      password: encryptedPassword,
      id: 'any_id'
    }
    return new Promise(resolve => resolve(newAccount))
  }
}
