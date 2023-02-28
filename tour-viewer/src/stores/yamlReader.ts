import jsYaml from 'js-yaml'
import fs from 'fs'

function openApiYaml() {
  return fs.readFileSync('/path/to/openapi.yaml', 'utf8')
}

function openApiObj() {
  jsYaml.safeLoad(openApiYaml)
}

function getImage(imageName: string) {
  const mediaType = 'image/png' // Change this to the appropriate media type
  const imageSchema = openApiObj.components.schemas.User.properties.avatar.content[mediaType].schema
  const imageData = imageSchema[imageName] // Change this to the appropriate property name
  return Buffer.from(imageData, 'base64')
}
