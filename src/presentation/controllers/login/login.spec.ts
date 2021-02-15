import { LoginController } from './login'
import { badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

interface SutTypes {
  sut: LoginController
}

const makeSut = (): SutTypes => {
  const sut = new LoginController()
  return {
    sut
  }
}

describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut()
    const httprequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httprequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut()
    const httprequest = {
      body: {
        email: 'any_email'
      }
    }
    const httpResponse = await sut.handle(httprequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })
})
