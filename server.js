const express = require('express')
const cors = require('cors')
const Contact = require('./fb')
const app = express()
app.use(express.json())
app.use(cors())


// ADD CONTACT
app.post('/add_contact', async (req, res) => {
  const data = req.body

  await Contact.add({ data })
  res.send({ msg: 'Contact Added' })
})

// GET ALL CONTACT
  app.get("/contacts", async (req, res) => {
    const snapshot = await Contact.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  });
  
  // GET ONE CONTACT
  app.get('/contact/:id', async (req, res) => {
    const id = req.params.id
    const snapshot = await (await Contact.doc(id).get()).data()
    res.send(snapshot)
  })
  
  //  UPDATE CONTACT
  app.put('/update/:id', async (req, res) => {
    const id = req.params.id
    console.log('befor deleting ID', req.body)
    delete req.body.id
    console.log('after  deleting ID', req.body)
    const data = req.body
    await Contact.doc(id).update(data)
    res.send({ msg: 'Contact Updated' })
  })


  
  // DELETE CONTACT 
  app.delete('/delete_contact/:id', async (req, res) => {
    const id = req.params.id
    await Contact.doc(id).delete()
    res.send({ msg: 'Contact Deleted' })
  })


// RUNNING SERVER
app.listen(3000, (err) => {
  if (err) {
    console.log('error while running server')
  } else {
    console.log('Server is runnig on port 3000')
  }
})