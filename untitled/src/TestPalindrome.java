public class TestPalindrome {
    public static void main(String[] args)
    {
        String str = "abcba";

        if (isPalindrome(str))
            System.out.print("True");
        else
            System.out.print("False");
    }

    private static boolean isPalindrome(String str) {
            int a = 0, b = str.length() - 1;

            while (a < b) {

                // If there is a mismatch
                if (str.charAt(a) != str.charAt(b))
                    return false;

                // Increment first pointer and
                // decrement the other
                a++;
                b--;
            }

            // Given string is a palindrome
            return true;
        }
    }
