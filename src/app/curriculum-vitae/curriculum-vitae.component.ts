import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { experiencesFr} from '../api/experiencesFr';
import { experiencesEn} from '../api/experiencesEn';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']

})
export class CurriculumVitaeComponent implements OnInit {
  experiences:any=experiencesEn;
  bookIcon: any ;
  sportIcon:any;
  musicIcon:any;

  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, french);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.experiences=experiencesEn;
      }
      else{
        this.experiences=experiencesFr;
      }
    });
  }

  ngOnInit(): void {
    this.bookIcon=awesom.faBookOpen;
    this.musicIcon=awesom.faMusic;
    this.sportIcon=awesom.faVolleyballBall;
  }
  
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
 

}
