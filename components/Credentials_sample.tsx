export const unSigned_LRN = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
  ],
  type: ["VerifiableCredential"],
  id: "TUM",
  issuer: "did:web:registrationnumber.notary.lab.gaia-x.eu:development",
  issuanceDate: "2024-02-05T00:43:55.520+00:00",
  credentialSubject: {
    "@context":
      "https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#",
    id: "TUM-SEBIS",
    type: "gx:legalRegistrationNumber",
    "gx:vatID": "DE811193231",
    "gx:vatID-countryCode": "DE",
  },
};

export const unsigned_TC = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
    "https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#",
  ],
  type: "VerifiableCredential",
  issuanceDate: "2024-02-05T01:02:08.728Z",
  credentialSubject: {
    "gx:termsAndConditions":
      "The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate sta tements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).",
    type: "gx:GaiaXTermsAndConditions",
    id: "did:web:wizard.lab.gaia-x.eu:api:credentials:2d37wbGvQzbAQ 84yRouh2m2vBKkN8s5AfH9Q75HZRCUQmJW7yAVSNKzjJj6gcjE2mDNDUHCichXWdMH3S2c8AaDLm3kXmf5R8CvKKfQXkXwGLSmxJi79jTQHCnBdKxye14xM93mP3rRdqa8v5LvPh228gQSHbffRCTmMULsyRYbuMwMaeXSD57uwfAACgmnVfg8PeGq7kcqy2VSFLReeGvXstg6GcUxWeo4C1DMs1amyTqwdkmnBtvAAQCBQFoiN8DqrzmRZB6Ar6tZQXaKctBGgoJNh8u4ATtVQ3PoxVTBqxVThbG85D8QmRRduscxW9BXqtcadu96UPxvu1aJVTdN9FRUWvD25uoZuApBzgZEdMMerszG9rdiKLy5CfEeyZimGfKeKgf1LuqfYt1CBMBMRnKEtvhGe5LTrnhWVW381tbwRH2VRhhSBuUr8fMXNBJVEJPKTAxxC5WoqFwSBSrJENKa68bZQLvn3BeFyULUJdMPDY5sj7ZGNq7Lu6C1xCb7Ux5XTPPj4BNefTWxy8sisXV92owPeUxUoUyqjJAUT4WKXF3NQJV4H9BSzoPkCHUyKQtcxEqryg5Qh7jjhhiquYZnkowDgbpHNeBE#b0e4cd5d7c36cfc8e720552e757d36701d0985f7624b85a97ff4e778147373ee",
    "gx:legalName": "testname",
    "gx:legalRegistrationNumber": {
      "gx:vatID": "testid",
    },
    "gx:headquarterAddress": {
      "gx:countrySubdivisionCode": "DE-BY",
    },
    "gx:legalAddress": {
      "gx:countrySubdivisionCode": "DE-BY",
    },
  },
  issuer: "did:pkh:tz:tz1cLwFeVEizYketeGXJJ4BtfPx2cH98crbS",
  id: "ab6a5897-ea24-4496-98b2-876d23ec52e2",
};
