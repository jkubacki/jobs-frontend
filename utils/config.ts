const env = process.env.NEXT_PUBLIC_ENVIRONMENT as string

const configCommon: ConfigCommon = {}

let configEnvironment: ConfigEnvironment

if (env === 'PRODUCTION') {
  configEnvironment = {
    ...configCommon,
    apiPath: process.env.NEXT_PUBLIC_API_PATH_PRODUCTION as string,
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT as string,
    basicAuthUsername: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME as string,
    basicAuthPassword: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD as string,
  }
} else if (env === 'DEMO') {
  configEnvironment = {
    ...configCommon,
    apiPath: process.env.NEXT_PUBLIC_API_PATH_DEMO as string,
    environment: process.env.NEXT_PUBLIC_DEMO as string,
    basicAuthUsername: '',
    basicAuthPassword: '',
  }
} else {
  configEnvironment = {
    ...configCommon,
    apiPath: process.env.NEXT_PUBLIC_API_PATH_DEVELOPMENT as string,
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT as string,
    basicAuthUsername: '',
    basicAuthPassword: '',
  }
}

const Config = { ...configCommon, ...configEnvironment }

export default Config

interface ConfigCommon {}

interface ConfigEnvironment {
  apiPath: string
  environment: string
  basicAuthUsername: string
  basicAuthPassword: string
}

interface Config extends ConfigCommon, ConfigEnvironment {}
