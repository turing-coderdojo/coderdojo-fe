/* eslint-disable */
const mockData = {
  mockAdminData: {
    "me": {
        "email": "example@admin1.com",
        "phoneNumber": "5555555553",
        "username": "admin1",
        "addresses": [
            {
                "street1": "234 Main St.",
                "street2": "Apt 456",
                "city": "denver",
                "state": "CO",
                "zip": "80128"
            }
        ],
        "venues": [
            {
                "id": 1,
                "name": "Venue One",
                "notes": "Here be Dragons",
                "email": "example@venue.com",
                "webUrl": "www.venueone.com",
                "events": [
                    {
                        "id": 2,
                        "name": "Test Event 2",
                        "notes": "testing notes",
                        "startTime": "2019-08-21 17:00:00 UTC",
                        "endTime": "2019-08-21 18:00:00 UTC",
                        "eventCode": "45fbf7"
                    },
                    {
                        "id": 3,
                        "name": "Test Event 3",
                        "notes": "testing notes",
                        "startTime": "2019-08-22 17:00:00 UTC",
                        "endTime": "2019-08-22 18:00:00 UTC",
                        "eventCode": "a1c4a4"
                    },
                    {
                        "id": 4,
                        "name": "Test Event 4",
                        "notes": "testing notes",
                        "startTime": "2019-08-23 19:00:00 UTC",
                        "endTime": "2019-08-23 20:00:00 UTC",
                        "eventCode": "e9e54f"
                    },
                    {
                        "id": 5,
                        "name": "Test Event 5",
                        "notes": "testing notes",
                        "startTime": "2019-07-18 19:00:00 UTC",
                        "endTime": "2019-07-18 20:00:00 UTC",
                        "eventCode": "136834"
                    },
                    {
                        "id": 6,
                        "name": "Test Event 6",
                        "notes": "testing notes",
                        "startTime": "2019-07-17 19:00:00 UTC",
                        "endTime": "2019-07-17 20:00:00 UTC",
                        "eventCode": "9dcfb7"
                    },
                    {
                        "id": 7,
                        "name": "Test Event 7",
                        "notes": "testing notes",
                        "startTime": "2019-07-16 19:00:00 UTC",
                        "endTime": "2019-07-16 20:00:00 UTC",
                        "eventCode": "6395f0"
                    },
                    {
                        "id": 9,
                        "name": "TODAYYY",
                        "notes": "Test today",
                        "startTime": "2019-07-23 19:30:00 UTC",
                        "endTime": "2019-07-23 21:00:00 UTC",
                        "eventCode": "b74ed5"
                    },
                    {
                        "id": 10,
                        "name": "Test Response",
                        "notes": "Testing Response",
                        "startTime": "2019-07-24 03:00:00 UTC",
                        "endTime": "2019-07-24 03:00:00 UTC",
                        "eventCode": "954b50"
                    },
                    {
                        "id": 11,
                        "name": "TODAYS EVENT",
                        "notes": "yayyy",
                        "startTime": "2019-07-24 19:00:00 UTC",
                        "endTime": "2019-07-24 20:00:00 UTC",
                        "eventCode": "2e260f"
                    }
                ]
            }
        ]
    }
  },
  mockFutureEvents: {
    "futureEvents": [
      {
          "id": 2,
          "name": "Test Event 2",
          "notes": "testing notes",
          "startTime": "2019-08-21 17:00:00 UTC",
          "endTime": "2019-08-21 18:00:00 UTC"
      },
      {
          "id": 3,
          "name": "Test Event 3",
          "notes": "testing notes",
          "startTime": "2019-08-22 17:00:00 UTC",
          "endTime": "2019-08-22 18:00:00 UTC"
      }
    ]
  },
  mockPastEvents: {
    "pastEvents": [
        {
            "id": 11,
            "name": "TODAYS EVENT",
            "notes": "yayyy",
            "startTime": "2019-07-24 19:00:00 UTC",
            "endTime": "2019-07-24 20:00:00 UTC"
        },
        {
            "id": 10,
            "name": "Test Response",
            "notes": "Testing Response",
            "startTime": "2019-07-24 03:00:00 UTC",
            "endTime": "2019-07-24 03:00:00 UTC"
        }
      ]
  },
  mockVenue: {
    allVenues: [
      {
        "id": 1,
        "name": "Venue One",
        "notes": "Here be Dragons",
        "email": "example@venue.com",
        "webUrl": "www.venueone.com",
        "addresses": [
          {
              "street1": "234 Main St.",
              "street2": "Apt 456",
              "city": "denver",
              "state": "CO",
              "zip": "80128"
          }
        ],
      }
    ]
  },
  mockStudentAttendance: {
      "id": 6,
      "username": "student1",
      "name": "Student One",
      "guardianId": {
          "name": "Matt Weiss",
          "username": "Duce",
          "email": "weiss.matt@outlook.com",
          "phoneNumber": "5555555555"
      }
  }

};

export default mockData;
