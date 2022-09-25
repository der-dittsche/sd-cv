const self = {
  lastname: "Dietrich",
  surname: "Sascha",
  birthday: "10.04.1987",
  hello: function () {
    console.log(
      `Mein Name ist ${this.surname} ${this.lastname} and I my Birthday is the ${this.birthday}`
    );
  },
  workexperience: [
    {
      beginn: "12/2021",
      end: null,
      position: "IT-Admin",
      company: "digiblue GmbH",
      expericence:
        "IT-Administrator und App-Entwickler für sensorbasiertes Monitoring",
    },
    {
      begin: "2019/01",
      end: "2019/04",
      position: "IT-Support Specialist",
      company: "digiblue GmbH",
      expericence:
        "internen IT-Support mit Umsetzung an internationalen Projekten",
    },
  ],
  project: [
    {
      beginn: "2018/10",
      end: "2018/11",
      position: "UHD Mitarbeiter",
      company: "Pieritz select",
      company2: "OVB",
      expericence: "Urlaubsvertretung für den internen IT-Support",
    },
    {
      beginn: "2018/09",
      end: "2018/09",
      position: "Project-Mitarbeiter",
      company: "Robert Half Technologie",
      company2: "Tection",
      expericence:
        "Assistent bei der Umsetzung des Projektes: Einführung eines CMS-Systemes",
    },
  ],
};

class Workexperience {
  constructor() {
    beginn: "";
    end: "";
    position: "";
    company: "";
    company2: "";
    expericence: "";
  }
}

class Project {
  constructor() {
    beginn: "";
    end: "";
    position: "";
    company: "";
    company2: "";
    expericence: "";
  }
}
