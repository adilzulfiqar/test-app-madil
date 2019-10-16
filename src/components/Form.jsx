import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  Container,
  Table
} from 'reactstrap'

function BForm () {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      //   console.log(res.data)
      setLocaion(res.data)
    })
  }, [])

  const [itemType, changeItemType] = useState({
    value: '',
    action: ''
  })
  const [tableBody, settableBody] = useState([])
  const [locaion, setLocaion] = useState([])

  const tableObj = {
    quality: '',
    code: '',
    description: '',
    currentPrice: '',
    unitPrice: '',
    textConsole: '',
    textSomthing: '',
    unit: '',
    action: ''
  }

  var addItem = () => {
    if (itemType.value === 'addItem') {
      //   console.log('1')
      changeItemType({
        ...itemType,
        action: itemType.value
      })
      document.getElementById('radio1').checked = false
    } else if (itemType.value === 'stockItem') {
      console.log('2')
    } else if (itemType.value === 'customerAssets') {
      console.log('3')
    } else {
      console.log('nothing')
    }
  }

  // table Row map
  var response = tableBody.map((data, key) => {
    if (data) {
      return (
        <tr key={key}>
          <td>{data.quality}</td>
          <td>{data.code}</td>
          <td>{data.description}</td>
          <td>{data.currentPrice}</td>
          <td>{data.unitPrice}</td>
          <td>{data.textConsole}</td>
          <td>{data.textSomthing}</td>
          <td>{data.unit}</td>
          <td>
            <span style={{ cursor: 'pointer' }}>✓</span>{' '}
            <span style={{ cursor: 'pointer' }}>✘</span>
          </td>
        </tr>
      )
    }
    return console.log('nothg')
  })

  //   Get Locations
  var getLocations = () => {
    // console.log('working')
  }

  return (
    <Container>
      <br />
      <br />
      <br />
      <Form>
        <Row form>
          <Col md={2}>
            <Label for='location'>Location</Label>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type='text'
                name='location'
                id='location'
                placeholder='Location'
                list='locations'
                onFocus={getLocations}
              />
              <datalist
                id='locations'
                style={{ height: 200, maxHeight: 200, overflow: 'hidden' }}>
                {locaion.map((e, i) => {
                  return <option key={i}>{e.username}</option>
                })}
              </datalist>
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={2}>
            <Label for='contactPerson'>Contact Person</Label>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Input
                type='text'
                name='contactPerson'
                id='contactPerson'
                placeholder='contactPerson'
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Label for='contactNumber'>Contact</Label>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type='number'
                name='contactNumber'
                id='contactNumber'
                placeholder='Contact Number'
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Label for='topic'>Topic</Label>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Input type='text' name='topic' id='topic' placeholder='topic' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>Expected Sale Date</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='date' name='startDate' id='startDate' />
            </FormGroup>
          </Col>
          <Col md={2}>Closed Date</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='date' name='closeDate' id='closeDate' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>Lead</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='lead' id='lead' />
            </FormGroup>
          </Col>
          <Col md={2}>Type</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='type' id='type' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>Currency</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='currency' id='currency' />
            </FormGroup>
          </Col>
          <Col md={2}>Marketing Compaign</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='compaign' id='compaign' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>Sales Opportunity Stage</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='sostage' id='SOStage' />
            </FormGroup>
          </Col>
          <Col md={2}>Sales Opportunity Probability</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='SOProbability' id='SOProbability' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>Expected Revenue</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='revenue' id='revenue' />
            </FormGroup>
          </Col>
          <Col md={2}>Status</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='status' id='status' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>Reference</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='reference' id='reference' />
            </FormGroup>
          </Col>
          <Col md={2}>User</Col>
          <Col md={4}>
            <FormGroup>
              <Input type='text' name='user' id='user' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Label for='remarks'>Remarks</Label>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Input type='textarea' name='text' id='remarks' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Quality</th>
                <th style={{ width: 80 }}>Code</th>
                <th>Description</th>
                <th>Current Price</th>
                <th>Unit Price</th>
                <th>Text Console</th>
                <th>Text somthing</th>
                <th>Unit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {response}

              {itemType.action === 'addItem' ? (
                <tr>
                  <th scope='row'>
                    <Input
                      type='number'
                      name='quality'
                      id='quality'
                      onChange={e => {
                        console.log('prev', tableObj)
                        tableObj.quality = e.target.value
                        console.log('after', tableObj)
                      }}
                    />
                  </th>
                  <td>
                    <Input
                      type='select'
                      name='Code'
                      id='Code'
                      onChange={e => {
                        console.log('prev', tableObj)

                        tableObj.code = e.target.value
                        console.log(tableObj)
                      }}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </td>
                  <td>
                    <Input
                      type='text'
                      name='desc'
                      id='desc'
                      onChange={e => {
                        console.log('prev', tableObj)

                        tableObj.description = e.target.value
                        console.log(tableObj)
                      }}
                    />
                  </td>
                  <td>
                    <Input
                      type='number'
                      name='currentPrice'
                      id='currentPrice'
                      onChange={e => {
                        console.log('prev', tableObj)

                        tableObj.currentPrice = e.target.value
                        console.log(tableObj)
                      }}
                    />
                  </td>
                  <td>
                    <Input
                      type='number'
                      name='unitPrice'
                      id='unitPrice'
                      onChange={e => {
                        console.log('prev', tableObj)

                        tableObj.unitPrice = e.target.value
                        console.log(tableObj)
                      }}
                    />
                  </td>
                  <td>
                    <Input
                      type='select'
                      name='textConsole'
                      id='textConsole'
                      onChange={e => {
                        console.log('prev', tableObj)

                        tableObj.textConsole = e.target.value
                        console.log(tableObj)
                      }}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </td>
                  <td>
                    <Input
                      type='text'
                      name='something'
                      id='something'
                      onChange={e => {
                        console.log('prev', tableObj)

                        tableObj.textSomthing = e.target.value
                        console.log(tableObj)
                      }}
                    />
                  </td>
                  <td>
                    <Input
                      type='number'
                      name='unit'
                      id='unit'
                      onChange={e => {
                        tableObj.unit = e.target.value
                        console.log(tableObj)
                      }}
                    />
                  </td>
                  <td>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        settableBody([...tableBody, tableObj])
                        changeItemType({ value: '', action: '' })
                      }}>
                      ✓
                    </span>{' '}
                    <span style={{ cursor: 'pointer' }}>✘</span>
                  </td>
                </tr>
              ) : (
                <tr />
              )}
            </tbody>
          </Table>
          <Col style={{ textAlign: 'center' }}>
            <span
              style={{ paddingRight: 25, cursor: 'pointer' }}
              onClick={addItem}>
              + Add Item
            </span>
            <span style={{ paddingRight: 25 }}>
              <Label check>
                <Input
                  type='radio'
                  name='radio1'
                  id='radio1'
                  onChange={() => {
                    changeItemType({ value: 'addItem' })
                  }}
                />{' '}
                Item
              </Label>
            </span>
            <span style={{ paddingRight: 25 }}>
              <Label check>
                <Input
                  type='radio'
                  name='radio1'
                  id='radio2'
                  onChange={() => {
                    changeItemType({ value: 'stockItem' })
                  }}
                />{' '}
                Stock Item
              </Label>
            </span>
            <span>
              <Label check>
                <Input
                  type='radio'
                  name='radio1'
                  id='radio3'
                  onChange={() => {
                    changeItemType({ value: 'customerAssets' })
                  }}
                />{' '}
                Customer Assets/Equipments
              </Label>
            </span>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Button>Submit</Button> <Button>Cancle</Button>
          </Col>
        </Row>
      </Form>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default BForm
