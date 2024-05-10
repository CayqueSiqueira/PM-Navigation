import { useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container } from './styles'
import { InputAmount } from '../../components/InputAmount'
import { InputDate } from '../../components/InputDate'
export function Dashboard() {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [datePurchase, setDatePurchase] = useState('')
  const [category, setCategory] = useState('')
  const [local, setLocal] = useState('')

  return (
    <Container
    >
      <Header title='Controle de Gastos' />

      <Input
        placeholder='Descrição'
        placeholderTextColor='#363F5F'
        value={name}
        onChangeText={value => setName(value)}
      />

      <InputAmount
        placeholder='Valor'
        placeholderTextColor='#363F5F'
        value={amount}
        onChangeText={value => setAmount(value)}
      />

      <InputDate
        placeholder='Data Compra'
        placeholderTextColor='#363F5F'
        value={datePurchase}
        onChangeText={value => setDatePurchase(datePurchase)}
      />

      <Input
        placeholder='Categoria'
        placeholderTextColor='#363F5F'
        value={category}
        onChangeText={value => setCategory(value)}
      />

      <Input
        placeholder='Local da Compra'
        placeholderTextColor='#363F5F'
        value={local}
        onChangeText={value => setLocal(value)}
      />

      <Button
        title='Adicionar'
      />

    </Container>
  )
}