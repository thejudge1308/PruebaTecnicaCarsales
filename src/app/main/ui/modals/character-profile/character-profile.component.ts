import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CharacterModel } from "../../../dao/models/character.model";

@Component({
  selector: "app-character-profile",
  templateUrl: "./character-profile.component.html",
  styleUrl: "./character-profile.component.scss",
})
export class CharacterProfileComponent {
  constructor(
    public dialogRef: MatDialogRef<CharacterProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CharacterModel
  ) {
    this.dialogRef.disableClose = true;
  }

  public get imageUrl() {
    return this.data.image;
  }

  public get name() {
    return this.data.name;
  }

  public get gender() {
    return this.data.gender;
  }

  public get species() {
    return this.data.species;
  }

  public get episodesAmout() {
    return this.data.episode.length;
  }

  public get state() {
    return this.data.status;
  }

  public get origin() {
    return this.data.origin.name;
  }

  public get location() {
    return this.data.location.name;
  }

  public close() {
    this.dialogRef.close();
  }
}
