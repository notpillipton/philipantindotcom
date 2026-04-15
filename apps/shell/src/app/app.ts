import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Header } from '@shell/header';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContactForm } from '@shell/contact-form';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, Header],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  protected title = 'shell';
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private destroy$ = new Subject<void>();
  private dialogRef: MatDialogRef<ContactForm> | null = null;

  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['contact'] === 'true' && !this.dialogRef) {
        this.dialogRef = this.dialog.open(ContactForm, { width: '900px', maxWidth: '100vw' });
        
        this.dialogRef.afterClosed().subscribe(() => {
          this.dialogRef = null;
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { contact: null },
            queryParamsHandling: 'merge',
            replaceUrl: true
          });
        });
      } else if (params['contact'] !== 'true' && this.dialogRef) {
        this.dialogRef.close();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
