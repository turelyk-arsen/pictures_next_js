'use client'
import POSTCreateForm from '@/ui-components/POSTCreateForm'
import { Card } from '@aws-amplify/ui-react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router = useRouter();
  return (
    <Card variation="elevated" padding="x">
      <POSTCreateForm onSuccess={() => {
        router.push('/')
      }} />
    </Card>
  )
}

export default Dashboard