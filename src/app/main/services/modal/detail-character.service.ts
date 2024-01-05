import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CharacterModel } from "../../dao/models/character.model";
import { CharacterProfileComponent } from "../../ui/modals/character-profile/character-profile.component";

@Injectable({
  providedIn: "root",
})
export class DetailCharacterService {
  constructor(public dialog: MatDialog) {}

  open(value: CharacterModel) {
    return this.dialog
      .open(CharacterProfileComponent, {
        data: value,
        enterAnimationDuration: "500ms",
        exitAnimationDuration: "500ms",
      })
      .afterClosed();
  }
}
