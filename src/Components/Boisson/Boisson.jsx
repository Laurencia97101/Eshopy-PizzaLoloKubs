function Boisson() {
    fetch('./src/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Données JSON chargées:", data);
        
        var numChoisi;
        var boissons = data.boissons;
  
        window.alert("Choisissez votre boisson : 1=eau 2=coca 3=kilibibi 4=royalsoda");
        numChoisi = Number(window.prompt('Enter a value for numChoisi'));
  
        function trouverBoisson(index) {
          if (boissons[index].stock > 0) {
            boissons[index].stock -= 1;
            window.alert("Voici votre boisson");
          } else {
            window.alert("Stock insuffisant");
          }
        }
  
        switch (numChoisi) {
          case 1:
            trouverBoisson(0); // eau
            break;
          case 2:
            trouverBoisson(1); // coca
            break;
          case 3:
            trouverBoisson(2); // kilibibi
            break;
          case 4:
            trouverBoisson(3); // royalsoda
            break;
          default:
            window.alert("Choix invalide");
        }
      })
    //   .catch(error => {
    //     console.error('Erreur lors du chargement des données JSON:', error);
    //   });
  }
  export {Boisson}