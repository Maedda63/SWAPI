import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharacterComponent } from './character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CharacterService } from '../character.service';

fdescribe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  const fakeCharacterService = jasmine.createSpyObj('CharacterService', {
    searchCharac: of(null)
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
       ],
       providers: [{provide: CharacterService, useValue: fakeCharacterService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the right method', () => {
    const btn = fixture.nativeElement.querySelector('.btn.btn-primary');
    btn.click();
    expect(component.cs.searchCharac).toHaveBeenCalled();
  });

});
