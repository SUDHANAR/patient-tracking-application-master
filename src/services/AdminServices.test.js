import AdminServices from './AdminServices';
import UseEffect1 from '../UseEffect/UseEffect1';

beforeEach(() => {
    console.log('beforeEach called')
});


afterEach(() => {
    console.log('AfterEach called')
});

test('Testing get doctor', async () => {
    let UseEffect1 = new AdminServices();
    await UseEffect1.getDoctor().then((result) => {
        expect(result.data.length).toBeGreaterThanOrEqual(1);
    })
})

// test('Testing add Doctor', async () => {
//     let Services = new AdminServices();
//     let doctorObj = `{
//         "id": 1,
//         "dName": "Rekha",
//         "specialization": "MBBS",
//         "doctorEmai": "Rekha@gmail.com",
//         "password": "Rekha@123"
//     }
//     `
//     await services.addDoctor(JSON.parse(doctorObj)).then((result) => {
//         expect(result.data).toBe('Doctor with  this Id is added"')
//     })
// })

test('test' ,() => {
    expect(true).toBe(true);
})