import { Center } from '@mantine/core'
import { useViewModel } from '@/features/components/container/login/useViewModel'
import { GitHubButton } from '@/features/components/presentational/login/GitHubButton'

export const Login: React.FC = () => {
  const {
    action: { signInGitHub },
  } = useViewModel()

  return (
    <Center maw={300} h={300} mx='auto'>
      <GitHubButton onClick={signInGitHub} />
    </Center>
  )
}
