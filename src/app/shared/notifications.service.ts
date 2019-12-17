import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  confSuccess: MatSnackBarConfig = {
    duration: 2000,
    panelClass: ['notification', 'success']
  };
  confError: MatSnackBarConfig = {
    duration: 2000,
    panelClass: ['notification', 'error']
  };
  constructor(private Notification: MatSnackBar) { }
  onSuccess(message: string) {
    this.Notification.open(message, '', this.confSuccess);
  }
  onError(message: string) {
    this.Notification.open(message, '', this.confError);
  }
}
