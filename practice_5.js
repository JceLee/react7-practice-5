const team = {
    name: 'Developers',
    members: ['Alice', 'Bob'],
    introduceTeam() {
        this.members.forEach(function(member) {
          console.log(`${member}는 ${this.name} 팀에 속해 있습니다.`);
        });
    },
    introduceTeamArrow() {
      this.members.forEach(member => {
        console.log(`${member}는 ${this.name} 팀에 속해 있습니다.`);
      });
    },
};

team.introduceTeam();
// Q1. 콘솔에 어떻게 출력이 될까요?

team.introduceTeamArrow();
// Q2. 콘솔에 어떻게 출력이 될까요?
  
  