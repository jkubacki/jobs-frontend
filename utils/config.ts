const env = process.env.NEXT_PUBLIC_ENVIRONMENT as string

const configCommon: ConfigCommon = {}

let configEnvironment: ConfigEnvironment

if (env === 'PRODUCTION') {
  configEnvironment = {
    ...configCommon,
    apiPath: process.env.NEXT_PUBLIC_API_PATH_PRODUCTION as string,
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT as string,
  }
} else {
  configEnvironment = {
    ...configCommon,
    apiPath: process.env.NEXT_PUBLIC_API_PATH_DEVELOPMENT as string,
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT as string,
  }
}

const Config = { ...configCommon, ...configEnvironment }

export default Config

interface ConfigCommon {}

interface ConfigEnvironment {
  apiPath: string
  environment: string
}

interface Config extends ConfigCommon, ConfigEnvironment {}
