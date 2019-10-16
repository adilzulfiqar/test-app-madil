import React from 'react'

export default function newEntryForm () {
  return (
    <tr>
      <th scope='row'>
        <Input
          type='number'
          name='quality'
          id='quality'
          onChange={e => {
            tableObj.quality = e.target.value
          }}
        />
      </th>
      <td>
        <Input
          type='select'
          name='Code'
          id='Code'
          onChange={e => {
            tableObj.code = e.target.value
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
            tableObj.description = e.target.value
          }}
        />
      </td>
      <td>
        <Input
          type='number'
          name='currentPrice'
          id='currentPrice'
          onChange={e => {
            tableObj.currentPrice = e.target.value
          }}
        />
      </td>
      <td>
        <Input
          type='number'
          name='unitPrice'
          id='unitPrice'
          onChange={e => {
            tableObj.unitPrice = e.target.value
          }}
        />
      </td>
      <td>
        <Input
          type='select'
          name='textConsole'
          id='textConsole'
          onChange={e => {
            tableObj.textConsole = e.target.value
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
            tableObj.textSomthing = e.target.value
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
          }}
        />
      </td>
      <td>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            settableBody([...tableBody, tableObj])
          }}>
          ✓
        </span>{' '}
        <span style={{ cursor: 'pointer' }}>✘</span>
      </td>
    </tr>
  )
}
