var GameState = {
    init:function(){
        //adapt to screen size, fit all the game
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);  //Agregamos motor de fisicas
        
        //this.game.physics.arcade.gravity.y = 1000; //Gravedad en Y
        //this.cursors = this.game.input.keyboard.createCursorKeys(); //Se activan las teclas del teclado

        //Seteamos el tamaño del mundo :D 
        this.game.world.setBounds(0,0,700,360);
    },
	preload:function(){
		this.game.load.image('background', 'assets/images/background.png');
		this.game.load.image('bear', 'assets/images/animals/bear.png');
		this.game.load.image('camel', 'assets/images/animals/camel.png');
		this.game.load.image('dolphin', 'assets/images/animals/dolphin.png');
		this.game.load.image('elephant', 'assets/images/animals/elephant.png');
		this.game.load.image('flamenco', 'assets/images/animals/flamenco.png');
		this.game.load.image('giraffe', 'assets/images/animals/giraffe.png');
		this.game.load.image('hippopotamus', 'assets/images/animals/hippopotamus.png');
		this.game.load.image('kangaroo', 'assets/images/animals/kangaroo.png');
		this.game.load.image('krokodil', 'assets/images/animals/krokodil.png');
		this.game.load.image('lion', 'assets/images/animals/lion.png');
		this.game.load.image('monkey', 'assets/images/animals/monkey.png');
		this.game.load.image('panda_bear', 'assets/images/animals/panda_bear.png');
		this.game.load.image('parrot', 'assets/images/animals/parrot.png');
		this.game.load.image('penguin', 'assets/images/animals/penguin.png');
		this.game.load.image('polar_bear', 'assets/images/animals/polar_bear.png');
		this.game.load.image('rhino', 'assets/images/animals/rhino.png');
		this.game.load.image('seal', 'assets/images/animals/seal.png');
		this.game.load.image('snake', 'assets/images/animals/snake.png');
		this.game.load.image('tiger', 'assets/images/animals/tiger.png');
		this.game.load.image('toucan', 'assets/images/animals/toucan.png');
		this.game.load.image('zebra', 'assets/images/animals/zebra.png');

        /*Falta cargar las figuras y ver si se pueden hacer sprites*/
        this.game.load.image('circle_black', 'assets/images/figures/circles/circle_black.png');
        this.game.load.image('circle_blue', 'assets/images/figures/circles/circle_blue.png');
        this.game.load.image('circle_brown', 'assets/images/figures/circles/circle_brown.png');
        this.game.load.image('circle_gray', 'assets/images/figures/circles/circle_gray.png');
        this.game.load.image('circle_green', 'assets/images/figures/circles/circle_green.png');
        this.game.load.image('circle_lila', 'assets/images/figures/circles/circle_lila.png');
        this.game.load.image('circle_orange', 'assets/images/figures/circles/circle_orange.png');
        this.game.load.image('circle_pink', 'assets/images/figures/circles/circle_pink.png');
        this.game.load.image('circle_red', 'assets/images/figures/circles/circle_red.png');
        this.game.load.image('circle_white', 'assets/images/figures/circles/circle_white.png');
        this.game.load.image('circle_yellow', 'assets/images/figures/circles/circle_yellow.png');
    
        this.game.load.image('heart_black', 'assets/images/figures/hearts/heart_black.png');
        this.game.load.image('heart_blue', 'assets/images/figures/hearts/heart_blue.png');
        this.game.load.image('heart_brown', 'assets/images/figures/hearts/heart_brown.png');
        this.game.load.image('heart_gray', 'assets/images/figures/hearts/heart_gray.png');
        this.game.load.image('heart_green', 'assets/images/figures/hearts/heart_green.png');
        this.game.load.image('heart_lila', 'assets/images/figures/hearts/heart_lila.png');
        this.game.load.image('heart_orange', 'assets/images/figures/hearts/heart_orange.png');
        this.game.load.image('heart_pink', 'assets/images/figures/hearts/heart_pink.png');
        this.game.load.image('heart_red', 'assets/images/figures/hearts/heart_red.png');
        this.game.load.image('heart_white', 'assets/images/figures/hearts/heart_white.png');
        this.game.load.image('heart_yellow', 'assets/images/figures/hearts/heart_yellow.png');
                
        this.game.load.image('hexagon_black', 'assets/images/figures/hexagons/hexagon_black.png');
        this.game.load.image('hexagon_blue', 'assets/images/figures/hexagons/hexagon_blue.png');
        this.game.load.image('hexagon_brown', 'assets/images/figures/hexagons/hexagon_brown.png');
        this.game.load.image('hexagon_gray', 'assets/images/figures/hexagons/hexagon_gray.png');
        this.game.load.image('hexagon_green', 'assets/images/figures/hexagons/hexagon_green.png');
        this.game.load.image('hexagon_lila', 'assets/images/figures/hexagons/hexagon_lila.png');
        this.game.load.image('hexagon_orange', 'assets/images/figures/hexagons/hexagon_orange.png');
        this.game.load.image('hexagon_pink', 'assets/images/figures/hexagons/hexagon_pink.png');
        this.game.load.image('hexagon_red', 'assets/images/figures/hexagons/hexagon_red.png');
        this.game.load.image('hexagon_white', 'assets/images/figures/hexagons/hexagon_white.png');
        this.game.load.image('hexagon_yellow', 'assets/images/figures/hexagons/hexagon_yellow.png');
        
        this.game.load.image('pentagon_black', 'assets/images/figures/pentagons/pentagon_black.png');
        this.game.load.image('pentagon_blue', 'assets/images/figures/pentagons/pentagon_blue.png');
        this.game.load.image('pentagon_brown', 'assets/images/figures/pentagons/pentagon_brown.png');
        this.game.load.image('pentagon_gray', 'assets/images/figures/pentagons/pentagon_gray.png');
        this.game.load.image('pentagon_green', 'assets/images/figures/pentagons/pentagon_green.png');
        this.game.load.image('pentagon_lila', 'assets/images/figures/pentagons/pentagon_lila.png');
        this.game.load.image('pentagon_orange', 'assets/images/figures/pentagons/pentagon_orange.png');
        this.game.load.image('pentagon_pink', 'assets/images/figures/pentagons/pentagon_pink.png');
        this.game.load.image('pentagon_red', 'assets/images/figures/pentagons/pentagon_red.png');
        this.game.load.image('pentagon_white', 'assets/images/figures/pentagons/pentagon_white.png');
        this.game.load.image('pentagon_yellow', 'assets/images/figures/pentagons/pentagon_yellow.png');
        
        this.game.load.image('rectangle_black', 'assets/images/figures/rectangles/rectangle_black.png');
        this.game.load.image('rectangle_blue', 'assets/images/figures/rectangles/rectangle_blue.png');
        this.game.load.image('rectangle_brown', 'assets/images/figures/rectangles/rectangle_brown.png');
        this.game.load.image('rectangle_gray', 'assets/images/figures/rectangles/rectangle_gray.png');
        this.game.load.image('rectangle_green', 'assets/images/figures/rectangles/rectangle_green.png');
        this.game.load.image('rectangle_lila', 'assets/images/figures/rectangles/rectangle_lila.png');
        this.game.load.image('rectangle_orange', 'assets/images/figures/rectangles/rectangle_orange.png');
        this.game.load.image('rectangle_pink', 'assets/images/figures/rectangles/rectangle_pink.png');
        this.game.load.image('rectangle_red', 'assets/images/figures/rectangles/rectangle_red.png');
        this.game.load.image('rectangle_white', 'assets/images/figures/rectangles/rectangle_white.png');
        this.game.load.image('rectangle_yellow', 'assets/images/figures/rectangles/rectangle_yellow.png');
        
        this.game.load.image('square_black', 'assets/images/figures/squares/square_black.png');
        this.game.load.image('square_blue', 'assets/images/figures/squares/square_blue.png');
        this.game.load.image('square_brown', 'assets/images/figures/squares/square_brown.png');
        this.game.load.image('square_gray', 'assets/images/figures/squares/square_gray.png');
        this.game.load.image('square_green', 'assets/images/figures/squares/square_green.png');
        this.game.load.image('square_lila', 'assets/images/figures/squares/square_lila.png');
        this.game.load.image('square_orange', 'assets/images/figures/squares/square_orange.png');
        this.game.load.image('square_pink', 'assets/images/figures/squares/square_pink.png');
        this.game.load.image('square_red', 'assets/images/figures/squares/square_red.png');
        this.game.load.image('square_white', 'assets/images/figures/squares/square_white.png');
        this.game.load.image('square_yellow', 'assets/images/figures/squares/square_yellow.png');
        
        this.game.load.image('star_black', 'assets/images/figures/stars/star_black.png');
        this.game.load.image('star_blue', 'assets/images/figures/stars/star_blue.png');
        this.game.load.image('star_brown', 'assets/images/figures/stars/star_brown.png');
        this.game.load.image('star_gray', 'assets/images/figures/stars/star_gray.png');
        this.game.load.image('star_green', 'assets/images/figures/stars/star_green.png');
        this.game.load.image('star_lila', 'assets/images/figures/stars/star_lila.png');
        this.game.load.image('star_orange', 'assets/images/figures/stars/star_orange.png');
        this.game.load.image('star_pink', 'assets/images/figures/stars/star_pink.png');
        this.game.load.image('star_red', 'assets/images/figures/stars/star_red.png');
        this.game.load.image('star_white', 'assets/images/figures/stars/star_white.png');
        this.game.load.image('star_yellow', 'assets/images/figures/stars/star_yellow.png');
        
        this.game.load.image('rhombus_black', 'assets/images/figures/rhombuses/rhombus_black.png');
        this.game.load.image('rhombus_blue', 'assets/images/figures/rhombuses/rhombus_blue.png');
        this.game.load.image('rhombus_brown', 'assets/images/figures/rhombuses/rhombus_brown.png');
        this.game.load.image('rhombus_gray', 'assets/images/figures/rhombuses/rhombus_gray.png');
        this.game.load.image('rhombus_green', 'assets/images/figures/rhombuses/rhombus_green.png');
        this.game.load.image('rhombus_lila', 'assets/images/figures/rhombuses/rhombus_lila.png');
        this.game.load.image('rhombus_orange', 'assets/images/figures/rhombuses/rhombus_orange.png');
        this.game.load.image('rhombus_pink', 'assets/images/figures/rhombuses/rhombus_pink.png');
        this.game.load.image('rhombus_red', 'assets/images/figures/rhombuses/rhombus_red.png');
        this.game.load.image('rhombus_white', 'assets/images/figures/rhombuses/rhombus_white.png');
        this.game.load.image('rhombus_yellow', 'assets/images/figures/rhombuses/rhombus_yellow.png');
        
        this.game.load.image('triangle_black', 'assets/images/figures/triangles/triangle_black.png');
        this.game.load.image('triangle_blue', 'assets/images/figures/triangles/triangle_blue.png');
        this.game.load.image('triangle_brown', 'assets/images/figures/triangles/triangle_brown.png');
        this.game.load.image('triangle_gray', 'assets/images/figures/triangles/triangle_gray.png');
        this.game.load.image('triangle_green', 'assets/images/figures/triangles/triangle_green.png');
        this.game.load.image('triangle_lila', 'assets/images/figures/triangles/triangle_lila.png');
        this.game.load.image('triangle_orange', 'assets/images/figures/triangles/triangle_orange.png');
        this.game.load.image('triangle_pink', 'assets/images/figures/triangles/triangle_pink.png');
        this.game.load.image('triangle_red', 'assets/images/figures/triangles/triangle_red.png');
        this.game.load.image('triangle_white', 'assets/images/figures/triangles/triangle_white.png');
        this.game.load.image('triangle_yellow', 'assets/images/figures/triangles/triangle_yellow.png');
        
        this.load.audio('black', ['assets/audio/black.ogg', 'assets/audio/black.mp3']);
        this.load.audio('blue', ['assets/audio/blue.ogg', 'assets/audio/blue.mp3']);
        this.load.audio('brown', ['assets/audio/brown.ogg', 'assets/audio/brown.mp3']);
        this.load.audio('green', ['assets/audio/green.ogg', 'assets/audio/green.mp3']);
        this.load.audio('orange', ['assets/audio/orange.ogg', 'assets/audio/orange.mp3']);
        this.load.audio('pink', ['assets/audio/pink.ogg', 'assets/audio/pink.mp3']);
        this.load.audio('red', ['assets/audio/red.ogg', 'assets/audio/red.mp3']);
        this.load.audio('white', ['assets/audio/white.ogg', 'assets/audio/white.mp3']);
        this.load.audio('yellow', ['assets/audio/yellow.ogg', 'assets/audio/yellow.mp3']);
        
        //Cargamos el json de la configuracion de los animales
        this.load.text('animaloramaData','assets/data/data.json');   
	},
	create:function(){
        this.animalData = JSON.parse(this.game.cache.getText('animaloramaData'));
        console.log(this.animalData);
		//scaling options
    	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	//have the game centered horizontally
	    this.scale.pageAlignHorizontally = true;
	    this.scale.pageAlignVertically = true;
	    //screen size will be set automatically
   		this.scale.setScreenSize(true);
   		//create a sprite for the background
    	this.background = this.game.add.sprite(0, 0, 'background');

        //Generamos los animales de manera aleatoria a utilizar
        var arrayFiguresAndAnimals = this.generaMemorama(this.animalData.animals);
        var animalToFind = arrayFiguresAndAnimals[this.getRandomInt(0,8)].key;
        
        var randomUniqueColors = [];
        var int_ =0;
        while(int_<10){
            var tempValue = this.getRandomInt(0,10);
            if(randomUniqueColors.indexOf(tempValue)==-1){
                //No existe
                randomUniqueColors.push(tempValue);
                int_++;
            }
        }
        
        this.cards = this.game.add.group();
        this.animals = this.game.add.group();
        var self = this;
        var card;
        var animal;
        var counter = 0;
        var arrayPosicionesParaAnimales = [];
        var cardGlobal;
        var animalGlobal;
        this.animalData.figures.forEach(function(element){
            //console.log("ESTO "+this.animalData.animals[arrayFiguresAndAnimals[counter].id].key);
            //Se crea tarjeta
            card = self.cards.create(element.x,element.y,element.key+"_"+element.color[randomUniqueColors[counter]].value,0);
            animal = self.animals.create(element.x,element.y,this.animalData.animals[arrayFiguresAndAnimals[counter].id].key,0);
            animal.scale.setTo(0.4,0.4); //Se escala a una cuarta
            animal.anchor.setTo(0.5); //Mantiene en el centro la figura
            //animal.anchor.setTo(0.5,0.5);
            //animal.visible = false;
            animal.alpha = 0;
            arrayPosicionesParaAnimales.push({posX:element.x,posY:element.y});
            card.customParams = {animal:animal,color:element.key,audio:self.game.add.audio(this.animalData.colors[randomUniqueColors[counter]].key),toFind:animalToFind};
            
            //console.log("Este es el sonido "+this.animalData.colors[randomUniqueColors[counter]].key);
            card.anchor.setTo(0.5);
            //Implementar una animacion aqui
            card.inputEnabled = true;
            card.input.pixelPerfectClick = true;
            card.events.onInputDown.add(self.animateFigure,self);
            counter++;
        },this);
        console.log("Posiciones "+arrayPosicionesParaAnimales);

        //this.animals = this.game.add.group();
        //var selfAnimal = this;
        //var animal;
        //var counterAnimal = 0;
        /*this.animalData.animals.forEach(function(element){
            animal = selfAnimal.animals.create(arrayPosicionesParaAnimales[counterAnimal].posX,arrayPosicionesParaAnimales[counterAnimal].posY)
            counterAnimal++;
        },this);*/
        
        /*arrayFiguresAndAnimals.forEach(function(element){
            animal = selfAnimal.animals.create(arrayPosicionesParaAnimales[counterAnimal].posX,arrayPosicionesParaAnimales[counterAnimal].posY,this.animalData.animals[element.id].key);
            //card.anchor.setTo(0.000001,0.000001);
            counterAnimal++;
        },this);
        */
        
        //var arrayPartidas = [];
        //var memorama;
        //numero de partidas definidas en el json
        //var numero_partidas = this.animalData.number_stages;
    	//for (var i = 0; i < numero_partidas; i++) {
            //En este arreglo se guardan los animales a utilizar en este juego
        //    memorama = this.agregaAtributoFigura(this.generaMemorama(this.animalData.animals));
        //    arrayPartidas.push(memorama);
        //};
        
        //Creamos un grupo donde se guardaran cada una de las partidas con sus respectivos memoramas ya cargados
        //this.stages = this.game.add.group();
        //var self = this;
        //var stage;

        //arrayPartidas.forEach(function(element){
        //    stage = self.stages.create();
        //},this);

        //pintamos las figuras
	},
	update:function(){},

    //generamos el Memorama a partir del arreglo de los 21 animales
    generaMemorama:function(animalData){
        var memorama = [];
        //Arreglo de posiciones a tomar, se tomaran 9 elementos sin repetir
        var posicionesATomar = this.randomNumbers21(); //El arreglo contiene 9 numeros sin repetir
        console.log(posicionesATomar);
        for (var i =0; i < posicionesATomar.length; i++) {
            for (var j = 0; j < animalData.length; j++) {
                if(animalData[j].id == posicionesATomar[i]){
                    memorama.push(animalData[j]);
                    break;
                }
            };
        };
        return memorama;
    },

	//Genera 9 numeros sin repetirse del 0 al 20
	randomNumbers21:function(){
		var unicos = chance.unique(chance.natural,9,{min:0,max:20});
		return unicos;
	},

    //Genera un elemento aleatorio desde un minimo a un maximo
    getRandomInt:function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    //Se encarga de animar cada una de las tarjetas
    animateFigure: function(card,event){
        cardGlobal = card;
        animalGlobal = card.customParams.animal;
        card.customParams.audio.play();
        var millisecondsToWait = 1000;
        
        if(card.customParams.animal.key == card.customParams.toFind){
            console.log("Encontrado");
            console.log("Ganaste :D");

            game.time.events.add(Phaser.Timer.SECOND * 2, this.fadeImage, this);
            game.time.events.add(Phaser.Timer.SECOND * 2, this.showAnimal, this);
        }else{
            console.log("no es");
            game.time.events.add(Phaser.Timer.SECOND * 1, this.fadeImage, this);
            game.time.events.add(Phaser.Timer.SECOND * 1, this.showAnimal, this);
            game.time.events.add(Phaser.Timer.SECOND * 4, this.badCard, this);   
        }
    },
    fadeImage: function(){
        console.log(cardGlobal);
        game.add.tween(cardGlobal).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);

    },
    showAnimal: function(){
        console.log("Le animal"+animalGlobal);
        game.add.tween(animalGlobal).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
       
    },
    badCard: function(){
        game.add.tween(cardGlobal).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(animalGlobal).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');