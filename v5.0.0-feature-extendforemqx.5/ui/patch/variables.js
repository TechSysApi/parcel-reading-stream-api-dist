var variables={
  "name": "@ch-post-logistics/parcel-reading-stream-api",
  "version": "5.0.0-feature-extendforemqx.5",
  "description": "Parcel Reading Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "gfellerle",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "apikana": "^0.9.25",
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "gfellerle",
    "namespace": "logistics.parcel.reading",
    "shortName": "parcel-reading",
    "projectName": "parcel-reading-stream-api",
    "npmPackage": "@ch-post-logistics/parcel-reading-stream-api",
    "title": "Parcel Reading Stream API",
    "plugins": [
      "maven",
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.logistics.parcel.reading.v1",
    "mavenGroupId": "ch.post.logistics.parcel",
    "dotnetNamespace": "Ch.Post.Logistics.Parcel.Reading.V1",
    "dotnetPackageId": "Ch.Post.Logistics.Parcel.Reading.StreamApi",
    "mqs": "Kafka"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}