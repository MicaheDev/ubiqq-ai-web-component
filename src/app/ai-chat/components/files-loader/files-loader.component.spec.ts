import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesLoaderComponent } from './files-loader.component';

describe('FilesLoaderComponent', () => {
  let component: FilesLoaderComponent;
  let fixture: ComponentFixture<FilesLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesLoaderComponent]
    });
    fixture = TestBed.createComponent(FilesLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });
});
