let nums =[3,3]
let target = 6

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // let index_one;
    // let index_two;
    // for (let position = 0; position < nums.length; position++) {
    //     if (nums[position] >= 10 ** -9 && 10 ** 9 >= nums[position]) {
    //         const element = nums[position];
    //         const array_two = nums.slice(1);

    //         array_two.map((item, index) => {
    //             if (item + element === target) {
    //                 index_two = index + 1;
    //                 index_one = position;
    //             }
    //         })
    //     }
    // }
    // if (index_one !== undefined && index_two !== undefined) {
    //     return [index_one, index_two];
    // }

    let new_map = new Map();
    for(let position = 0; position < nums.length; position++) { 
        let num_one = nums[position];
        let num_two = target - num_one;

        if(new_map.has(num_two)){
            return [i, map.get(num2)];
        }
        new_map.set(num_one, i);
    }

}
