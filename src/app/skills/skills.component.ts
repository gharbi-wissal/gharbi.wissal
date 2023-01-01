import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [
      {
        name: 'JAVA, C#, SQL, PHP, HTML5/CSS3 ,JavaScript, Python',
        percent: 90,
        remark: 'excellent',
      },
    ],
    frameworks: [
      {
        name: 'ASP .NET, Spring Boot, Angular,ReactJs.',
        percent: 90,
        remark: 'excellent',
      },
    ],
    methodologies: [
      { name: 'Microsoft SQL Server, MYSQL, Postgresql.', percent: 70, remark: 'very-good' },
      { name: 'Windows, Linux(Ubuntu)', percent: 70, remark: 'very-good' },

    ],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {}
}
