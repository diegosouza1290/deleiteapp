import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CadastroAnimal } from '../pages/cadastroanimal/cadastroanimal';
import { ListaAnimal } from '../pages/listaanimal/listaanimal';
import { AnimalService } from '../providers/animal.service';
import { CadastroLote } from '../pages/cadastrolote/cadastrolote';
import { ListaLote } from '../pages/listalote/listalote';
import { LoteService } from '../providers/lote.service';
import { CadastroRaca } from '../pages/cadastroraca/cadastroraca';
import { ListaRaca } from '../pages/listaraca/listaraca';
import { RacaService } from '../providers/raca.service';
import { CadastroCategoria } from '../pages/cadastrocategoria/cadastrocategoria';
import { ListaCategoria } from '../pages/listacategoria/listacategoria';
import { CategoriaService } from '../providers/categoria.service';
import { CadastroVacinas } from '../pages/cadastrovacinas/cadastrovacinas';
import { ListaVacinas } from '../pages/listavacinas/listavacinas';
import { VacinasService } from '../providers/vacinas.service';
import { PropriedadeService } from '../providers/propriedade.service';
import { CadastroProducao } from '../pages/cadastroproducao/cadastroproducao';
import { ListaProducao } from '../pages/listaproducao/listaproducao';
import { ProducaoService } from '../providers/producao.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Menu } from '../pages/menu/menu';
import { CadastroPropriedade } from '../pages/cadastropropriedade/cadastropropriedade';
import { EditarAnimal } from '../pages/editaranimal/editaranimal';
import { EditarPropriedade } from '../pages/editarpropriedade/editarpropriedade';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { AuthService } from '../providers/auth/auth-service';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ListaPropriedade } from '../pages/listapropriedade/listapropriedade';
import { CadastroDespesas } from '../pages/cadastrodespesas/cadastrodespesas';
import { ListaDespesas } from '../pages/listadespesas/listadespesas';
import { EditarLote } from '../pages/editarlote/editarlote';
import { EditarVacinas } from '../pages/editarvacinas/editarvacinas';
import { EditarProducao } from '../pages/editarproducao/editarproducao';
import { EditarDespesas } from '../pages/editardespesas/editardespesas';
import { EditarRaca } from '../pages/editarraca/editarraca';
import { EditarCategoria } from '../pages/editarcategoria/editarcategoria';
import { DespesasService } from '../providers/despesas.service';
import { HomePage } from '../pages/homepage/homepage';
import { Tabs } from '../pages/tabs/tabs';
import { SigninWithEmailPage } from '../pages/signinwithemail/signinwithemail';

//conexao com firebase
const config = {
  apiKey: "AIzaSyB44rkVKSwZtq2tzo3sMKtmb4FM64U-AJ8",
  authDomain: "xvaca2018.firebaseapp.com",
  databaseURL: "https://xvaca2018.firebaseio.com",
  projectId: "xvaca2018",
  storageBucket: "xvaca2018.appspot.com",
  messagingSenderId: "49438615447"
};

@NgModule({
  declarations: [
    MyApp,
    Menu,
    CadastroAnimal,
    ListaAnimal,
    CadastroCategoria,
    ListaCategoria,
    CadastroLote,
    ListaLote,
    CadastroRaca,
    ListaRaca,
    CadastroVacinas,
    ListaVacinas,
    CadastroProducao,
    ListaProducao,
    CadastroPropriedade,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage,
    EditarAnimal,
    ListaPropriedade,
    EditarPropriedade,
    CadastroDespesas,
    ListaDespesas,
    EditarCategoria,
    EditarDespesas,
    EditarLote,
    EditarProducao,
    EditarRaca,
    EditarVacinas,
    HomePage,
    Tabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), AngularFireModule.initializeApp(config),
    AngularFirestoreModule, AngularFireAuthModule, AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Menu,
    CadastroAnimal,
    ListaAnimal,
    CadastroCategoria,
    ListaCategoria,
    CadastroLote,
    ListaLote,
    CadastroRaca,
    ListaRaca,
    CadastroVacinas,
    ListaVacinas,
    CadastroProducao,
    ListaProducao,
    CadastroPropriedade,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage,
    EditarAnimal,
    ListaPropriedade,
    EditarPropriedade,
    CadastroDespesas,
    ListaDespesas,
    EditarCategoria,
    EditarDespesas,
    EditarLote,
    EditarProducao,
    EditarRaca,
    EditarVacinas,
    HomePage,
    Tabs
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }, 
    AnimalService, CategoriaService, LoteService, RacaService, 
    VacinasService, ProducaoService, StatusBar, SplashScreen, 
    AuthService, PropriedadeService, DespesasService
  ]
})
export class AppModule { }