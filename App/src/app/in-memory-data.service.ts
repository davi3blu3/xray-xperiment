import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [{ id: 11, name: 'Joe' }, { id: 12, name: 'Jane' }];

    const registration = {
      customerId: null,
      registrationNumber: 1471003,
      activityId: 2320,
      giaNumber: 1477,
      counter: 2,
      publicSafety: false,
      certify: true,
      signature: 'Keith Keystone',
      status: 'Approved',
      billingStatus: 'Active',
      comment: null,
      progress: '{"one":true,"two":true,"three":true,"four":true,"five":true}',
      date: '2018-11-15T18:25:00Z',
      approval: '2018-11-15T12:36:00Z',
      possessor: {
        tdecId: 1471,
        tdecVersion: null,
        locationId: 1391,
        locationVersion: 1,
        billingLocationId: 1391,
        billingLocationVersion: 1,
        physicalAddress: {
          street1: '603 Bert St, Ste 12',
          street2: null,
          city: 'Johnson City',
          county: 'Washington',
          state: 'TN',
          country: null,
          postalCode: '37601',
          plusFour: null,
          id: 214,
          globalId: '00000000-0000-0000-0000-000000000000',
          createdBy: null,
          updatedBy: null,
          updatedOn: null
        },
        billingAddress: {
          street1: '603 Bert St, Ste 12',
          street2: null,
          city: 'Johnson City',
          county: 'Washington',
          state: 'TN',
          country: null,
          postalCode: '37601',
          plusFour: null,
          id: 215,
          globalId: '00000000-0000-0000-0000-000000000000',
          createdBy: null,
          updatedBy: null,
          updatedOn: null
        },
        name: 'Keystone Dental Care, Inc',
        email: 'debbie.ownby@tn.gov',
        medSpecialty: 'Dentist',
        medOther: null,
        businessPhone: '8654567890',
        fax: '8654567899',
        id: 72,
        globalId: 'cc3fbb83-f6bd-4e92-ad49-5e179f56d11b',
        createdBy: '71',
        updatedBy: 'BG01158',
        updatedOn: null
      },
      owner: {
        name: 'Keystone Dental Care, Inc OWNER',
        address: {
          street1: '603 Bert St, Ste 12 OWNER',
          street2: null,
          city: 'Johnson City',
          county: 'Washington',
          state: 'TN',
          country: 'USA',
          postalCode: '37601-1234',
          plusFour: null,
          id: 216,
          globalId: '00000000-0000-0000-0000-000000000000',
          createdBy: null,
          updatedBy: null,
          updatedOn: null
        },
        email: 'debbie.ownby@tn.gov',
        businessPhone: '8654567891',
        id: 72,
        globalId: '2832593b-dc91-4f55-b821-76844afc3ab4',
        createdBy: '71',
        updatedBy: 'BG01158',
        updatedOn: null
      },
      radSafety: {
        name: 'Kelly Keystone',
        email: 'debbie.ownby@tn.gov',
        businessPhone: '8655567777',
        id: 72,
        globalId: 'c60df5ff-ce5d-42a5-8848-44be1292f941',
        createdBy: '71',
        updatedBy: 'BG01158',
        updatedOn: null
      },
      machines: [
        {
          controlPanel: {
            manufacturer: 'Keystone Panels 1',
            serialNumber: 'keystone-cp-1',
            status: null,
            room: 'Keystone 1',
            replacementDate: null,
            type: { category: 'Dental Diagnostic', subCategory: 'Panoramic' },
            id: 263,
            globalId: '01ed7bcb-d9dd-4cad-b08b-b7ba087de814',
            createdBy: '71',
            updatedBy: 'BG01158',
            updatedOn: null
          },
          controlNumber: 1,
          inStorage: null,
          storageLocation: null,
          status: 'Active',
          motility: 'Fixed',
          possessionDate: '2017-04-29T05:00:00Z',
          deleteDate: null,
          tubes: [
            {
              tubeNumber: 1,
              controlLetter: null,
              room: 'Keystone 1A',
              classification: '1',
              maxVoltage: 456,
              possessionDate: '2017-04-29T05:00:00Z',
              registrationType: 'Possession',
              tubeSerial: 'keystone-tube-1a',
              classOther: null,
              tubeManufact: 'Keystone Tubes 1A',
              controlNumber: '1A',
              replacementTube: null,
              registrationDate: '2018-11-15T18:35:58Z',
              originalPossession: '2017-04-29T05:00:00Z',
              deleteDate: '2018-11-16T14:51:50Z',
              initialInspection: '2017-07-28T17:00:00Z',
              status: 'Inactive',
              comments: null,
              inspections: [],
              id: 129,
              globalId: '21aa6749-702e-4b16-b76f-a67da31998ab',
              createdBy: '71',
              updatedBy: 'BG01158',
              updatedOn: null
            },
            {
              tubeNumber: 2,
              controlLetter: 'B',
              room: 'Keystone 1B',
              classification: '2',
              maxVoltage: 987,
              possessionDate: '2017-04-29T05:00:00Z',
              registrationType: 'Possession',
              tubeSerial: 'keystone-tube-1b',
              classOther: null,
              tubeManufact: 'Keystone Tubes Plus 1B',
              controlNumber: '1B',
              replacementTube: null,
              registrationDate: '2018-11-15T18:35:58Z',
              originalPossession: '2017-04-29T05:00:00Z',
              deleteDate: null,
              initialInspection: '2017-07-28T17:00:00Z',
              status: 'Active',
              comments: null,
              inspections: [],
              id: 130,
              globalId: 'df3a6e36-ff5d-4018-bd69-3821a7296bb3',
              createdBy: '71',
              updatedBy: 'BG01158',
              updatedOn: null
            }
          ],
          documents: [],
          id: 73,
          globalId: '991521ae-de8c-4e94-a336-91984b5f506d',
          createdBy: '71',
          updatedBy: 'BG01158',
          updatedOn: null
        },
        {
          controlPanel: {
            manufacturer: 'Control Guise',
            serialNumber: 'CG-23498',
            status: null,
            room: null,
            replacementDate: null,
            type: { category: 'Medical Diagnostic', subCategory: 'CT' },
            id: 343,
            globalId: 'e78aef55-e280-4741-b208-d708a0e7905b',
            createdBy: 'BG01158',
            updatedBy: 'BG01158',
            updatedOn: null
          },
          controlNumber: 3,
          inStorage: null,
          storageLocation: null,
          status: 'Active',
          motility: 'Mobile',
          possessionDate: '2018-02-02T06:00:00Z',
          deleteDate: null,
          tubes: [
            {
              tubeNumber: 5,
              controlLetter: 'A',
              room: null,
              classification: '4',
              maxVoltage: 99,
              possessionDate: '2018-02-02T06:00:00Z',
              registrationType: 'Tube Addition',
              tubeSerial: 'TB-3498',
              classOther: null,
              tubeManufact: 'Toobey Brothers',
              controlNumber: '3A',
              replacementTube: null,
              registrationDate: '2018-11-28T15:12:02Z',
              originalPossession: '2018-02-02T06:00:00Z',
              deleteDate: null,
              initialInspection: '2018-05-03T06:00:00Z',
              status: 'Active',
              comments: null,
              inspections: [],
              id: 155,
              globalId: '61c979ed-d741-4169-986b-bdd46d343608',
              createdBy: 'BG01158',
              updatedBy: 'BG01158',
              updatedOn: null
            }
          ],
          documents: [],
          id: 103,
          globalId: 'f174fd8c-6683-4be0-a4fe-40019b68e6f3',
          createdBy: 'BG01158',
          updatedBy: 'BG01158',
          updatedOn: null
        },
        {
          controlPanel: {
            manufacturer: 'Keystone Panels and Tables 2',
            serialNumber: 'keystone-cp-2',
            status: null,
            room: null,
            replacementDate: null,
            type: { category: 'Dental Diagnostic', subCategory: 'Hand Held' },
            id: 264,
            globalId: '51efe645-5139-4fee-8645-66f651c6b7ac',
            createdBy: '71',
            updatedBy: 'BG01158',
            updatedOn: null
          },
          controlNumber: 2,
          inStorage: null,
          storageLocation: null,
          status: 'Active',
          motility: 'Mobile',
          possessionDate: '2017-04-15T05:00:00Z',
          deleteDate: null,
          tubes: [
            {
              tubeNumber: 3,
              controlLetter: 'A',
              room: null,
              classification: '1',
              maxVoltage: 234,
              possessionDate: '2017-04-15T05:00:00Z',
              registrationType: 'Possession',
              tubeSerial: 'keystone-tube-2a',
              classOther: null,
              tubeManufact: 'Keystone Tubes and Lights 2A',
              controlNumber: '2A',
              replacementTube: null,
              registrationDate: '2018-11-15T18:35:58Z',
              originalPossession: '2017-04-15T05:00:00Z',
              deleteDate: null,
              initialInspection: '2017-07-14T17:00:00Z',
              status: 'Active',
              comments: null,
              inspections: [],
              id: 131,
              globalId: 'bf71f2a7-03aa-4aec-8487-e7bc58dbc1cd',
              createdBy: '71',
              updatedBy: 'BG01158',
              updatedOn: null
            },
            {
              tubeNumber: 4,
              controlLetter: 'B',
              room: null,
              classification: '2',
              maxVoltage: 123,
              possessionDate: '2017-04-15T05:00:00Z',
              registrationType: 'Possession',
              tubeSerial: 'keystone-tube-2b',
              classOther: null,
              tubeManufact: 'Keystone Tubes and Lights, Plus 2B',
              controlNumber: '2B',
              replacementTube: null,
              registrationDate: '2018-11-15T18:35:58Z',
              originalPossession: '2017-04-15T05:00:00Z',
              deleteDate: null,
              initialInspection: '2017-07-14T17:00:00Z',
              status: 'Active',
              comments: null,
              inspections: [],
              id: 132,
              globalId: '2e99717e-0c4e-4da8-88b5-df0633e34631',
              createdBy: '71',
              updatedBy: 'BG01158',
              updatedOn: null
            }
          ],
          documents: [],
          id: 74,
          globalId: 'f77ace9e-c7d4-4c6a-a556-a7ce6dbcbbb6',
          createdBy: '71',
          updatedBy: 'BG01158',
          updatedOn: null
        }
      ],
      documents: [
        {
          fileNetId: '{8DC3B655-47E3-4B32-8081-4EE003AB8A82}',
          mimeType: 'application/pdf',
          fileName: '070507swachandouts.pdf',
          tubeId: null,
          isEmployee: false,
          id: 244,
          globalId: 'aef188b6-815b-4e15-93a7-9b1dff668f1b',
          createdBy: '71',
          updatedBy: 'BG01158',
          updatedOn: null
        },
        {
          fileNetId: '{2D6051F8-91A3-449B-8B71-6334663CF239}',
          mimeType: 'application/pdf',
          fileName:
            'DRH-X-Ray-CN0724_Keystone Dental Care, Inc_Registration-Number_1471003',
          tubeId: null,
          isEmployee: true,
          id: 247,
          globalId: '78705243-86b6-4bf4-86e5-96adbdc270ca',
          createdBy: 'BG18015',
          updatedBy: 'BG01158',
          updatedOn: null
        },
        {
          fileNetId: '{21659E7E-E33F-498B-B350-C4D779613489}',
          mimeType: 'application/pdf',
          fileName: 'bsfr-2008BSFRroles.pdf',
          tubeId: null,
          isEmployee: false,
          id: 245,
          globalId: '18b648be-e5a1-484d-83e3-65dfa8e73724',
          createdBy: '71',
          updatedBy: 'BG01158',
          updatedOn: null
        },
        {
          fileNetId: '{DAFC7136-7D47-403D-812B-ADB6FC04D895}',
          mimeType: 'application/pdf',
          fileName:
            'DRH-X-Ray-CN0724_Keystone Dental Care, Inc_Submitted-On_11-15-2018',
          tubeId: null,
          isEmployee: false,
          id: 246,
          globalId: '9c8de6d9-f477-4252-9c4a-6483ce0fbbeb',
          createdBy: '71',
          updatedBy: 'BG01158',
          updatedOn: null
        },
        {
          fileNetId: '{7A954A19-65E5-4486-8200-312D3A9194C1}',
          mimeType: 'application/pdf',
          fileName: '070507swachandouts.pdf',
          tubeId: null,
          isEmployee: false,
          id: 243,
          globalId: '59f4bb90-dfe8-42a1-9fd9-9e8c4b522cd2',
          createdBy: '71',
          updatedBy: 'BG01158',
          updatedOn: null
        }
      ],
      id: 72,
      globalId: 'fb630e72-99f2-4ff7-b43c-8b27338a012a',
      createdBy: '71',
      updatedBy: 'BG01158',
      updatedOn: '2019-02-05T10:17:16Z'
    };

    return { users, registration };
  }
}
