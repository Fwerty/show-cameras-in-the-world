const electron = require('electron');
const url = require('url');
const path = require('path');



const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
// main.js dosyası


app.on('ready', () => {

    mainWindow= new BrowserWindow({
        width: 1100, // Genişliği 800 piksel
        height: 600, // Yüksekliği 600 piksel
        minWidth: 300,
        icon: 'world.ico',
        autoHideMenuBar: true,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    mainWindow.loadURL(

        url.format({

            pathname:path.join(__dirname,"main.html"),
            protocol:"file:",
            slashes: true
        })
    );

    // const mainMenu=electron.Menu.buildFromTemplate(mainMenuTemplate)

    // Menu.setApplicationMenu(mainMenu)


    ipcMain.on("key", (event, data) => {
        console.log(data);
    });

    ipcMain.on("key:inputValue", (event, data) => {
        console.log(data);
    });


    // yeni sayfalar
    ipcMain.on("key:washington_key", ()=>{
        f_washington();
    })
    ipcMain.on("key:tokyo_key", ()=>{
        f_tokyo();
    })
    ipcMain.on("key:oslo_key", ()=>{
        f_oslo();
    })
    ipcMain.on("key:rio_key", ()=>{
        f_rio();
    })
    ipcMain.on("key:giresun_key", ()=>{
        f_giresun();
    })
    ipcMain.on("key:berlin_key", ()=>{
        f_berlin();
    })
    ipcMain.on("key:jerusalem_key", () => {
        f_jerusalem();
      });

      ipcMain.on("key:negril_key", () => {
        f_negril();
      });

      ipcMain.on("key:lasvegas_key", () => {
        f_lasvegas();
      });

      ipcMain.on("key:seoul_key", () => {
        f_seoul();
      });

      ipcMain.on("key:sydney_key", () => {
        f_sydney();
      });
      ipcMain.on("key:mekke_key", () => {
        f_mekke();
      });
      
      ipcMain.on("key:dubai_key", () => {
        f_dubai();
      });

    // burda ana sayfa kapanırsa uygulamada olası açık olan başka bir sayfa varsa
    // onların da kapatılması sağlandı
    mainWindow.on("close", ()=>{
        app.quit();
    })





});



// const mainMenuTemplate = [

//     {
//         label:"dosya",
//         submenu : [
//             {
//                 label:"yeni dosya",
//             },
//             {
//                 label:"yeni klasor",
//             },
//             {
//                 label:"cikis",
//                 accelerator: process.platform=="win32" ? "ctrl+w":"",
//                 // accelator ile o işlemi yapacak kısayol ataması yaparız . bkz :ctrl+w
//                 role:"quit" // cikis ifadesine bastıgımızda cıkılmasını saglar
//             }
//         ]
//     }
// ]



// if (process.platform=="win32")
// {
//     mainMenuTemplate.unshift(
//         {
//             label:app.getName(),
//             role:"TODO"
//             // role ifadesi üzerine tıklandığında hiçbir şey olmayacağı anlamına gelir ,
//             // yani default navbar etiketi gibi düşünebilirsin
//         }
//     )
// }



// // production environment i : müşterinin gördüğü ortamdır , diğer ortam geliştiricilerin gördüğü ortamdır
// if(process.env.NODE_ENV != "production")
// {
//     mainMenuTemplate.push(


//     {label:"Dev Tools",
//     submenu:
//     [
//         {
//             label:"geliştirici penceresini aç",
//             click(item,focusedWindow)
//             {
//                 focusedWindow.toggleDevTools();
//             }
//         },

//         {
//             label:"yenile",
//             role:"Reload"
//         }
//     ]

//     }



//     )
// }




function f_washington()
{
    addWindow=new BrowserWindow({
        width:806,
        height:479 ,
       
        title:"yenı pencere",
        icon: 'world.ico',
        autoHideMenuBar: true,
        resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı

    });

    addWindow.loadURL(url.format({
        pathname:path.join(__dirname,"html files/washington.html"),
        protocol:"file",
        slashes:true
    }));



    // eğer yeni sayfa açıldıktan sonra kapatılırsa 0 a eşitle ki bellekte
    // gereksiz yer kaplamasın
    addWindow.on('close',()=>{
        addWindow=null;
    })

}


function f_tokyo()
{
    addWindow=new BrowserWindow({
        width:806,
        height:479 ,
        title:"yenı pencere",
        icon: 'world.ico',
        autoHideMenuBar: true,
        resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı

    });

    addWindow.loadURL(url.format({
        pathname:path.join(__dirname,"html files/tokyo.html"),
        protocol:"file",
        slashes:true
    }));



    // eğer yeni sayfa açıldıktan sonra kapatılırsa 0 a eşitle ki bellekte
    // gereksiz yer kaplamasın
    addWindow.on('close',()=>{
        addWindow=null;
    })

}


function f_oslo()
{
    addWindow=new BrowserWindow({
        width:806,
        height:479 ,
        title:"yenı pencere",
        icon: 'world.ico',
        autoHideMenuBar: true,
        resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(url.format({
        pathname:path.join(__dirname,"html files/oslo.html"),
        protocol:"file",
        slashes:true
    }));



    // eğer yeni sayfa açıldıktan sonra kapatılırsa 0 a eşitle ki bellekte
    // gereksiz yer kaplamasın
    addWindow.on('close',()=>{
        addWindow=null;
    })

}

function f_rio()
{
    addWindow=new BrowserWindow({
        width:806,
        height:479 ,
        title:"yenı pencere",
        icon: 'world.ico',
        autoHideMenuBar: true,
        resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(url.format({
        pathname:path.join(__dirname,"html files/rio.html"),
        protocol:"file",
        slashes:true
    }));



    // eğer yeni sayfa açıldıktan sonra kapatılırsa 0 a eşitle ki bellekte
    // gereksiz yer kaplamasın
    addWindow.on('close',()=>{
        addWindow=null;
    })

}



function f_giresun()
{
    addWindow=new BrowserWindow({
        width:806,
        height:479 ,
        title:"yenı pencere",
        icon: 'world.ico',
        autoHideMenuBar: true,
        resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(url.format({
        pathname:path.join(__dirname,"html files/giresun.html"),
        protocol:"file",
        slashes:true
    }));



    // eğer yeni sayfa açıldıktan sonra kapatılırsa 0 a eşitle ki bellekte
    // gereksiz yer kaplamasın
    addWindow.on('close',()=>{
        addWindow=null;
    })

}

function f_berlin()
{
    addWindow=new BrowserWindow({
        width:806,
        height:479 ,
        title:"yenı pencere",
        icon: 'world.ico',
        autoHideMenuBar: true,
        resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(url.format({
        pathname:path.join(__dirname,"html files/berlin.html"),
        protocol:"file",
        slashes:true
    }));



    // eğer yeni sayfa açıldıktan sonra kapatılırsa 0 a eşitle ki bellekte
    // gereksiz yer kaplamasın
    addWindow.on('close',()=>{
        addWindow=null;
    })

}


function f_jerusalem() {
    addWindow = new BrowserWindow({
      width:806,
        height:479 ,
      title: "Yeni Pencere",
      icon: "world.ico",
      autoHideMenuBar: true,
      resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "html files/jerusalem.html"),
        protocol: "file",
        slashes: true,
      })
    );

    // Yeni sayfa kapatıldıktan sonra bellekte yer kaplamasın diye null'a eşitleme
    addWindow.on("close", () => {
      addWindow = null;
    });
  }

  function f_negril() {
    addWindow = new BrowserWindow({
      width:806,
        height:479 ,
      title: "Yeni Pencere",
      icon: "world.ico",
      autoHideMenuBar: true,
      resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "html files/negril.html"),
        protocol: "file",
        slashes: true,
      })
    );

    // Yeni sayfa kapatıldıktan sonra bellekte yer kaplamasın diye null'a eşitleme
    addWindow.on("close", () => {
      addWindow = null;
    });
  }

  function f_lasvegas() {
    addWindow = new BrowserWindow({
      width:806,
        height:479 ,
      title: "Yeni Pencere",
      icon: "world.ico",
      autoHideMenuBar: true,
      resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "html files/lasvegas.html"),
        protocol: "file",
        slashes: true,
      })
    );

    // Yeni sayfa kapatıldıktan sonra bellekte yer kaplamasın diye null'a eşitleme
    addWindow.on("close", () => {
      addWindow = null;
    });
  }

  function f_seoul() {
    addWindow = new BrowserWindow({
      width:806,
        height:479 ,
      title: "Yeni Pencere",
      icon: "world.ico",
      autoHideMenuBar: true,
      resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "html files/seoul.html"),
        protocol: "file",
        slashes: true,
      })
    );

    // Yeni sayfa kapatıldıktan sonra bellekte yer kaplamasın diye null'a eşitleme
    addWindow.on("close", () => {
      addWindow = null;
    });
  }
  function f_sydney() {
    addWindow = new BrowserWindow({
      width:806,
        height:479 ,
      title: "Yeni Pencere",
      icon: "world.ico",
      autoHideMenuBar: true,
      resizable: false // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });

    addWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "html files/sydney.html"),
        protocol: "file",
        slashes: true,
      })
    );

    // Yeni sayfa kapatıldıktan sonra bellekte yer kaplamasın diye null'a eşitleme
    addWindow.on("close", () => {
      addWindow = null;
    });
  }

  function f_mekke() {
     addWindow = new BrowserWindow({
      width: 806,
      height: 479,
      title: "Mekke",
      icon: "world.ico",
      autoHideMenuBar: true,
      resizable: false, // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });
  
    addWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "html files/mekke.html"),
        protocol: "file",
        slashes: true,
      })
    );
  
    // Yeni sayfa kapatıldıktan sonra bellekte yer kaplamasın diye null'a eşitleme
    addWindow.on("close", () => {
      addWindow = null;
    });
  }

  function f_dubai() {
     addWindow = new BrowserWindow({
      width: 806,
      height: 479,
      title: "Dubai",
      icon: "world.ico",
      autoHideMenuBar: true,
      resizable: false, // Sayfanın boyutunun değiştirilebilirliği kapatıldı
    });
  
    addWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "html files/dubai.html"),
        protocol: "file",
        slashes: true,
      })
    );
  
    // Yeni sayfa kapatıldıktan sonra bellekte yer kaplamasın diye null'a eşitleme
    addWindow.on("close", () => {
      addWindow = null;
    });
  }
  




