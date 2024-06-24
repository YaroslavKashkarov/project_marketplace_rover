export class ToggleProfileEditing {
  public isProfileEditingVisible: boolean = false;

  public toggleProfileEditing(event: Event): void {
    event.preventDefault();
    this.isProfileEditingVisible = !this.isProfileEditingVisible;
  }
}

export class TogglePasswordEditing {
  public isPasswordEditingVisible!: boolean;

  public togglePasswordEditing(event: Event): void {
    event.preventDefault();
    this.isPasswordEditingVisible = !this.isPasswordEditingVisible;
  }
}
