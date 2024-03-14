import { Component } from '@angular/core';
import scenes from "../../../../../assets/scriptData/script.json";

@Component({
  selector: 'app-scriptreader',
  standalone: true,
  imports: [],
  templateUrl: './scriptreader.component.html',
  styleUrl: './scriptreader.component.css'
})
export class ScriptreaderComponent {
  scenesList: any = scenes.scenes;
}
