import { Component, Input } from "@angular/core";
import { CharacterModel } from "../../../../dao/models/character.model";
import { DetailCharacterService } from "../../../../services/modal/detail-character.service";

@Component({
  selector: "app-character-card",
  templateUrl: "./character-card.component.html",
  styleUrl: "./character-card.component.scss",
})
export class CharacterCardComponent {
  private currentCharacter: CharacterModel | undefined;
  public style: Record<string, string> = {
    Alive: "green",
    Dead: "red",
    unknown: "orange",
    default: "black",
  };
  @Input() public set character(value: CharacterModel) {
    if (!!value) {
      this.currentCharacter = value;
    }
  }

  constructor(private dialog: DetailCharacterService) {}

  public getName(): string {
    return !!this.currentCharacter ? this.currentCharacter.name : "";
  }

  public getGender(): string {
    return !!this.currentCharacter ? this.currentCharacter.gender : "";
  }

  public getSpecies(): string {
    return !!this.currentCharacter ? this.currentCharacter.species : "";
  }

  public getUrl(): string {
    return !!this.currentCharacter ? this.currentCharacter.image : "";
  }

  public getState(): string {
    return !!this.currentCharacter ? this.currentCharacter.status : "";
  }

  public getColor(): string {
    const status = !!this.currentCharacter
      ? this.currentCharacter.status
      : "default";
    return this.style[status];
  }

  public openModal(): void {
    if (!!this.currentCharacter) {
      this.dialog.open(this.currentCharacter).subscribe();
    }
  }
}
