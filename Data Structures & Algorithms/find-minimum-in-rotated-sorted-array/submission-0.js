class Solution {
    findMin(nums) {
        var i = 0;
        var j = nums.length - 1;

        while (i < j) {
            var mid = Math.floor((i + j) / 2);

            if (nums[mid] > nums[j]) {
                i = mid + 1;
            } else {
                j = mid;
            }
        }

        return nums[i];
    }
}