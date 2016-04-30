  app.controller('quizCtrl', function($scope) {
    $scope.items = [
      {
     "question" : "Să instalezi sau să repari telefoane",
     "type" : 1,
     "givenAnswer": 1
   },
{
     "question" : "Să urmezi un curs de matematică pentru afaceri.",
     "type" : 6,
     "givenAnswer": 1
   },
{
     "question" : "Să garantezi sau să supraveghezi persoane care au încălcat legea (ofiţer de probaţiune)",
     "type" : 4,
     "givenAnswer": 1
   },
{
     "question" : "Să inventezi un nou tip de echipament tehnic sau ştiinţific",
     "type" : 2,
     "givenAnswer": 1
   },
{
     "question" : "Să fii agent imobiliar",
     "type" : 5,
     "givenAnswer": 1
   },
{
     "question" : "Să asculţi mari muzicieni",
     "type" : 3,
     "givenAnswer": 1
   },
{
     "question" : "Să lucrezi în construcţiii",
     "type" : 1,
     "givenAnswer": 1
   },
{
     "question" : "Să controlezi declaraţiile băncilor pentru a descoperi greşelile",
     "type" : 6,
     "givenAnswer": 1
   },
{
     "question" : "Să participi la creşterea fondului de caritate",
     "type" : 4,
     "givenAnswer": 1
   },
{
     "question" : "Să faci cercetări ştiinţifice privind utilizarea energiei solare pentru încălzirea caselor",
     "type" : 2,
     "givenAnswer": 1
   },
{
     "question" : "Să lucrezi pentru a convinge guvernul să voteze o lege",
     "type" : 5,
     "givenAnswer": 1
   },
{
     "question" : "Să scrii o piesă de teatru",
     "type" : 3,
     "givenAnswer": 1
   },
{
     "question" : "Să montezi dispozitive electrice",
     "type" : 1,
     "givenAnswer": 1
   },
{
     "question" : "Să foloseşti calculatorul pentru date contabile",
     "type" : 6,
     "givenAnswer": 1
   },
{
     "question" : "Să planifici activitatea altora",
     "type" : 4,
     "givenAnswer": 1
   },

   {
     "question" : "Să lucrezi la realizarea unei inimi artificiale",
     "type" : 2,
     "givenAnswer": 1
   },

   {
     "question" : "Să promovezi dezvoltarea unei noi pieţe de aprovizionare a populaţiei",
     "type" : 5,
     "givenAnswer": 1
   },
   {
     "question" : "Să compui sau să faci aranjamente muzicale",
     "type" : 3,
     "givenAnswer": 1
   },
   {
     "question" : "Să construieşti etajere pentru cărţi",
     "type" : 1,
     "givenAnswer": 1
   },
   {
     "question" : "Să urmezi un curs de contabilitate",
     "type" : 6,
     "givenAnswer": 1
   },
   {
     "question" : "Să dai primul ajutor",
     "type" : 4,
     "givenAnswer": 1
   },
   {
     "question" : "Să fii asistent medical într-un laborator",
     "type" : 2,
     "givenAnswer": 1
   },
   {
     "question" : "Să faci o afacere; să faci comerţ",
     "type" : 5,
     "givenAnswer": 1
   },
   {
     "question" : "Să dirijezi o orchestră simfonică",
     "type" : 3,
     "givenAnswer": 1
   },
   {
     "question" : "Să construieşti case ca antreprenor de clădiri",
     "type" : 1,
     "givenAnswer": 1
   },
   {
     "question" : "Să lucrezi în calitate de consilier familial",
     "type" : 4,
     "givenAnswer": 1
   },
   {
     "question" : "Să urmezi un curs de biologie la şcoală sau universitate",
     "type" : 2,
     "givenAnswer": 1
   },
   {
     "question" : "Să fii legiuitorul care să medieze disputele dintre sindicate şi companii",
     "type" : 5,
     "givenAnswer": 1
   },
   {
     "question" : "Să scrii reportaje pentru reviste",
     "type" : 3,
     "givenAnswer": 3
   },
   {
     "question" : "Să faci animale din lemn",
     "type" : 1,
     "givenAnswer": 1
   },
   {
     "question" : "Să fii funcţionarul care păstrează datele referitoare la căştigurile lucrătorilor",
     "type" : 6,
     "givenAnswer": 1
   },

   {
     "question" : "Să cercetezi, să cauţi un remediu contra cancerului",
     "type" : 2,
     "givenAnswer": 1
   },

   {
     "question" : "Să ajuţi copiii  cu tulburări mintale",
     "type" : 4,
     "givenAnswer": 1
   },
   {
     "question" : "Să fii judecător",
     "type" : 5,
     "givenAnswer": 1
   },
   {
     "question" : "Să pictezi animale sau peisaje",
     "type" : 3,
     "givenAnswer": 1
   },
   {
     "question" : "Să lucrezi ca paznic sau custode",
     "type" : 1,
     "givenAnswer": 1
   },
   {
     "question" : "Să operezi într-un registru de încasări",
     "type" : 6,
     "givenAnswer": 1
   },
   {
     "question" : "Să înveţi şi să ajuţi oameni din ţările nedezvoltate",
     "type" : 4,
     "givenAnswer": 1
   },
   {
     "question" : "Să conduci studii ştiinţifice privind controlul bolilor plantelor",
     "type" : 2,
     "givenAnswer": 1
   },
   {
     "question" : "Să recrutezi şi să angajezi oameni pentru o companie mare",
     "type" : 5,
     "givenAnswer": 1
   },
   {
     "question" : "Să scrii scenarii TV",
     "type" : 3,
     "givenAnswer": 1
   },
   {
     "question" : "Să conduci un autobuz",
     "type" : 1,
     "givenAnswer": 1
   },
   {
     "question" : "Să fii recepţioner la un hotel",
     "type" : 6,
     "givenAnswer": 1
   },
  ];


    $scope.currentItemIndex = 0;
    $scope.currentItem = $scope.items[0];

    $scope.currentAnswer = 0;


    $scope.results = [
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Realist",
          "jobs": "inginer, mecanic, şofer, maşinist etc.",
          "chars" : "conformist, sincer, onest, supus, materialist, natural, consecvent, practic, modest, timid, stabil, econom"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Investigativ",
          "jobs": "medic, chimist, matematician, biolog, alte ocupaţii care necesită abilităţi matematice şi ştiinţifice",
          "chars" : "analitic, precaut, critic, curios, independent, introvertit, metodic, modest, precis, raţional, rezervat"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Artistic",
          "jobs": "ocupaţiile se înscriu în domeniul artelor plastice, a decoraţiunilor de interior, a muzicii, scrisului",
          "chars" : "complex, dezordonat, emoţional, expresiv, idealist, imaginativ, lipsit de abilităţi practice, impulsiv, independent, original, nonconformist"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Social",
          "jobs": "învăţătoare, profesoară, consilier, asistent social, manager de resurse umane",
          "chars" : "cooperant, prietenos, generos, săritor, idealist, centrat pe probleme, amabil, responsabil, sociabil, înţelegător"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Întreprinzător",
          "jobs": "agent de vânzări, manager, politician",
          "chars" : "curajos, ambiţios, atrage atenţia, dominant, energic, impulsiv, optimist, popular, sociabil, vorbăreţ"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Convențional",
          "jobs": "contabil, funcţionar, bibliotecar, secretar etc",
          "chars" : "conştiincios, atent, conservator, conformist, supus, ordonat, consecvent, eficient, practic, controlat, eficient"
        }
    ];
    $scope.showQuestions = true;
    $scope.showResults = false;
    $scope.showResult = false;
    $scope.shownResult = {};

    $scope.getResult = function() {
      for (var i = 0; i < $scope.items.length; i++) {
        $scope.results[$scope.items[i].type - 1].givenCount += $scope.items[i].givenAnswer;
        $scope.results[$scope.items[i].type - 1].totalCount++;
      }
      $scope.showResults = true;
      $scope.showQuestions = false;
    }

    $scope.nextItem = function() {
      if ($scope.currentItemIndex == $scope.items.length - 1) {
        $scope.getResult();
        return;
      }
      $scope.currentItemIndex = $scope.currentItemIndex + 1;
      $scope.currentItem = $scope.items[$scope.currentItemIndex];
    }

    $scope.showResultDetails = function(result) {
      $scope.shownResult = result;
      $scope.showResults = false;
      $scope.showResult = true;
    }

    $scope.goBack = function() {
      $scope.showResult = false;
      $scope.showResults = true;
    }

  });
