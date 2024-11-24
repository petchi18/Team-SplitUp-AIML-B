const teams = [
    { name: "Team 1", students: ["NISHOK KUMAR R (Team Lead)", "PRINCE BROONA J (Sub Lead)", "RAKSHANA M", "SHANMIYA T P", "SAKTHI SABARISH R"], quote: "Great things in business are never done by one person. They're done by a team of people." },
    { name: "Team 2", students: ["RITHIKA S (Team Lead)", "SHWETHA P (Sub Lead)", "NAVEEN K", "PRITHV NACHIYAPPAN S", "RAGUNATH M"], quote: "Teamwork makes the dream work." },
    { name: "Team 3", students: ["SAKTHIVEL R (Team Lead)", "NADHIYA SHREE S (Sub Lead)", "RIIDHA FARMEEN N", "NAVIN C", "PRASHANTH RAJIN C T"], quote: "Alone we can do so little; together we can do so much." },
    { name: "Team 4", students: ["SOWMIYA M (Team Lead)", "VASANTHA DEEPAN J (Team Lead - 2)", "ROHITH G", "RUCHICA B", "SAI SHIVATHARSHINI", "SATHISH IYAPPAN B"], quote: "Teamwork divides the task and multiplies the success." },
    { name: "Team 5", students: ["THIRUMALAI R (Team Lead)", "SANJIT KUMAAR J (Sub Lead)", "SWETHA S", "SANJO THOMAS", "SANTHOSH S"], quote: "A successful team is a group of many hands but of one mind." },
    { name: "Team 6", students: ["VISHNU M S (Team Lead)", "SUBHAHARINI S L (Sub Lead)", "PRAVEEN RAJ S", "PRAGATHEESHWARAN M", "SRI VISHAL C"], quote: "Great things are never done by one person, they're done by a team of people." },
    { name: "Team 7", students: ["PURUSOUTHANAN B (Team Lead)", "SRUTHI MOL R (Sub Lead)", "SANJAY G", "SHALOM J", "VIGNESH M"], quote: "If everyone is moving forward together, then success takes care of itself." },
    { name: "Team 8", students: ["SHEIK ARSH S (Team Lead)", "YUHASHINI K (Sub Lead)", "SUDHARSHAN R E", "SURESH S", "SARVESH R"], quote: "A good team is like a puzzle—when one piece is missing, it doesn’t work." },
    { name: "Team 9", students: ["SURESH KRISHNA S P (Team Lead)", "VAISHNAVI P (Sub Lead)", "YAMINI S", "SANTHOSH KUMAR S", "SHYAM GANESH S"], quote: "A great team is not a group of people who work together, but a group of people who trust each other." },
    { name: "Team 10", students: ["PRANESH T (Team Lead)", "NITHYASREE A P (Sub Lead)", "SIVA A", "RUBARAJ M", "SHAHUL HAMMED S"], quote: "Teamwork divides the task and multiplies the success." }
];

function revealTeam(teamNumber) {
    const team = teams[teamNumber - 1];
    const teamInfoContainer = document.getElementById('team-info');
    teamInfoContainer.style.display = 'block';
    teamInfoContainer.innerHTML = '';

    const teamNameElement = document.createElement('h3');
    teamNameElement.innerText = team.name;
    teamInfoContainer.appendChild(teamNameElement);

    let delay = 0;
    const studentListElement = document.createElement('ul');
    team.students.forEach((student, index) => {
        setTimeout(() => {
            const studentElement = document.createElement('li');
            studentElement.innerText = student;
            studentListElement.appendChild(studentElement);
        }, delay);
        delay += 2000;
    });
    teamInfoContainer.appendChild(studentListElement);
    const quoteButton = document.getElementById('quote-button');
    quoteButton.style.display = 'inline-block';
}

function revealQuote() {
    const teamName = document.getElementById('team-info').querySelector('h3').innerText;
    const team = teams.find(t => t.name === teamName);
    document.getElementById('quote-display').innerText = team.quote;
}
