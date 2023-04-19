import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { User, Vd34Service } from './vd34.service';

describe('Vd34Service', () => {
  let vd34Svc: Vd34Service;
  let utilSvc: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    vd34Svc = TestBed.inject(Vd34Service);
    utilSvc = TestBed.inject(UtilsService);
  });

  it('vd34Svc should be created', () => {
    expect(vd34Svc).toBeTruthy();
  });

  it('vd34Svc should be return User[] when call getUser()', (done: DoneFn) => {
    vd34Svc.getUser().subscribe({
      next: (res: User[]) => {
        expect(res)
          .withContext('res is instance of Array')
          .toBeInstanceOf(Array);
        expect(res.length)
          .withContext('res length >= 1')
          .toBeGreaterThanOrEqual(1);
        expect(Object.keys(res[0]).sort())
          .withContext('res element must be instance of User')
          .toEqual(Object.keys(new User).sort());
        done();
      }
    });
  });

  it('vd34Svc should be return User when call getUserById()', (done: DoneFn) => {
    vd34Svc.getUser().subscribe({
      next: (res: User[]) => {
        vd34Svc.getUserById(res[0]._id).subscribe({
          next: (res: User) => {
            expect(Object.keys(res).sort())
              .withContext('res element must be instance of User')
              .toEqual(Object.keys(new User).sort());
            done();
          }
        });
      }
    });
  });

  it('vd34Svc should be create User when call createUser()', (done: DoneFn) => {
    const newUser = new User('DEMO', 1, 'DEMO');
    vd34Svc.createUser(newUser.name, newUser.age, newUser.colour)
      .subscribe({
        next: (res: User) => {
          const obj1: Partial<User> = res;
          const obj2: Partial<User> = newUser;
          delete obj1._id;
          delete obj2._id;
          expect(utilSvc.compareTwoObj(obj1, obj2))
            .withContext('res element must be instance of User')
            .toBeTrue();
          done();
        }
      });
  });

  it('vd34Svc should be update User when call updateUser()', (done: DoneFn) => {
    vd34Svc.getUser().subscribe({
      next: (res: User[]) => {
        const editUser = new User('DEMO-EDIT', 1, 'DEMO-EDIT', res[0]._id);
        vd34Svc.updateUser(res[0]._id, editUser.name, editUser.age, editUser.colour)
          .subscribe({
            next: () => {
              vd34Svc.getUserById(res[0]._id).subscribe({
                next: (res2: User) => {
                  expect(utilSvc.compareTwoObj(editUser, res2))
                    .withContext('res element must be instance of User')
                    .toBeTrue();
                  done();
                }
              });
            }
          });
      }
    });
  });

  it('vd34Svc should be delete User when call deleteUser()', (done: DoneFn) => {
    vd34Svc.getUser().subscribe({
      next: (res: User[]) => {
        vd34Svc.deleteUser(res[0]._id)
          .subscribe({
            next: () => {
              vd34Svc.getUserById(res[0]._id).subscribe({
                next: () => {
                  done.fail('must not return a User');
                },
                error: (error) => {
                  console.log(error);
                  expect(error.message)
                    .withContext('deleted user status must be 404')
                    .toContain('Http failure response');
                  done();
                }
              });
            }
          });
      }
    });
  });

});

